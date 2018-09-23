import express from 'express';
import isEmpty from 'lodash/isEmpty';
import User from '../../../models/user';

import validateInput from '../../../validation/signInValidation';
import authenticate from '../../../validation/authenticateUser';

const router = express.Router();

router.post('/', (req, res) => {
  const { user, password} = req.body;

  let errors = validateInput({ user, password });
  
  if (!isEmpty(errors))
    res.status(200).json({ errors });
  else {
    User 
      .findOne({ username: user })
      .exec()
      .then(doc => {
        if (isEmpty(doc)) {
          User.findOne({ email: user })
          .exec()
          .then(doc => {
            if (isEmpty(doc)) {
              errors.match = "Credentials are invalid";
              res.status(200).json({ errors });
            }
            else {
              authenticate(password, doc)
                .then(token => {
                  res.status(200).json({ token });
                })
                .catch(err => {
                  if (err.err) res.status(500).json({ errors, err });
                  else {
                    errors.match = err.match;
                    res.status(200).json({ errors });
                  }
                })
            }
          })
          .catch(err => res.status(500).json({ errors, err, message: "Database Error "}));
        }
        else {
          authenticate(password, doc)
            .then(token => {
              res.status(200).json({ token });
            })
            .catch(err => {
              if (err.err) res.status(500).json({ errors, err });
              else {
                errors.match = err.match;
                res.status(200).json({ errors });
              }
            })
        }
      })
      .catch(err => res.status(500).json({ errors, err, message: "Database Error" }));
  }
});

export default router;