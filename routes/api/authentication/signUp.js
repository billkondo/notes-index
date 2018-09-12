import express from 'express';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import uuidv4 from 'uuid/v4'; 
import User from '../../../models/user';

import signUpValidation from '../../../validation/signUpValidation';

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  const errors = signUpValidation(info);

  if (isEmpty(errors)) {
    bcrypt.hash(info.password, 11, (err, hash) => {
      if (err) res.status(500).json({ err, message: "Could not hash password" });

      const newUser = new User({
        username: info.username, 
        email: info.email, 
        passwordHash: hash,
        userId: uuidv4() 
      });

      newUser
        .save()
        .then(item => res.status(200).json({ errors }))
        .catch(err => res.status(500).json({ err, errors, message: "Could not save user in Database" }))
    });
  }
  else 
    res.status(200).json({ errors });
});

export default router;