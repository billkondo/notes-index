import express from 'express';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import User from '../../models/user';

import signUpValidation from '../../validation/signUpValidation';
import signInValidation from '../../validation/signInValidation';

const router = express.Router();

router.post('/', (req, res) => {
  
});

router.post('/signup', (req, res) => {
  const info = req.body;
  const errors = signUpValidation(info);

  if (isEmpty(errors)) {
    bcrypt.hash(info.password, 11, (err, hash) => {
      if (err) res.status(500).json({ err, message: "Could not hash password" });

      const newUser = new User({
        username: info.username, 
        email: info.email, 
        passwordHash: hash
      });

      newUser
        .save()
        .then(item => res.status(200).json({ errors }))
        .catch(err => res.status(500).json({ err, errors, message: "Could not save user in Database" }))
    });
  }
  else 
    res.status(202).json({ errors });
});

router.post('/signin', (req, res) => {
  const { user, password} = req.body;

  let errors = signInValidation({ user, password });
  
  if (!isEmpty(errors))
    res.status(200).json({ errors });

  User
    .find({ 
      $or:[
        { username: user }, 
        { email: user }
      ]})
    .exec()
    .then(docs => {
      if (!isEmpty(docs)) {
        for (const doc of docs) {
          bcrypt.compare(password, doc.passwordHash, (err, match) => {
            if (err) res.status(500).json({ err, errors, message: "Could not decrypt" });

            if (match) 
              res.status(200).json({ errors });
          })
        }

        errors.match = "Credentials are Incorrect";
        res.status(200).json({ errors });
      }
      else res.status(200);
    })
    .catch(err => res.status(500).json({ err, errors, message: "Database error" }))
});

export default router;