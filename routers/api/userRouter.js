import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import uuidv4 from 'uuid/v4';
import User from '../../models/userModel';

import authenticationCheckerMiddleware from '../../middlewares/authentication-checker-middleware';
import signUpValidationMiddleware from '../../middlewares/sign-up-validation-middleware';
import signInValidationMiddleware from '../../middlewares/sign-in-validation-middleware';
import newUserMiddleware from '../../middlewares/new-user-middleware';

const router = express.Router();

// Create an user for the App
router.post('/signUp', signUpValidationMiddleware, (req, res) => {
  // Errors is an JSON object with errors in user validation
  // Each field has a message explaining the error
  const { errors } = req;

  // Look for errors
  // If there is not any error, create user and save it in database
  if (isEmpty(errors)) {
    bcrypt.hash(req.body.password, 11, (err, hash) => {
      if (err) res.status(500).json({ err, message: 'Could not hash password' });

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        passwordHash: hash,
        userId: uuidv4()
      });

      newUser
        .save()
        .then(() => res.status(200).json({ errors }))
        .catch(serverError =>
          res.status(500).json({ serverError, errors, message: 'Could not save user in Database' })
        );
    });
  } else res.status(200).json({ errors });
});

// Authenticate user
router.post('/signIn', signInValidationMiddleware, (req, res) => {
  const { token, errors } = req;
  res.status(200).json({ token, errors });
});

router.put('/update', authenticationCheckerMiddleware, newUserMiddleware, (req, res) => {
  User.findOne({ userId: req.userId })
    .exec()
    .then(user => {
      user.name = req.newUser.name;
      user.save(err => {
        if (err) res.status(500).json({ Database: 'Could not save User', err });
        else {
          const token = jwt.sign(
            {
              username: user.username,
              name: user.name,
              exp: req.newUser.exp
            },
            'secret'
          );

          res.status(200).json({ token });
        }
      });
    })
    .catch(err => res.status(500).json({ Database: 'Could not find User', err }));
});

export default router;
