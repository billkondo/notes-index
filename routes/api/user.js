import express from 'express';
import User from '../../models/user';
import jwt from 'jsonwebtoken';

import verify from '../../validation/verifyMiddleware';
import updateUserInfo from '../../middlewares/updateUserInfo';

const router = express.Router();

router.put('/update', verify, updateUserInfo, (req, res) => {
  User
    .findOne({ userId: req.userId })
    .exec()
    .then(user => {
      user.name = req.newUser.name;
      user.save(err => {
        if (err) res.status(500).json({ Database: "Could not save User", err });
        else {
          const token = jwt.sign({
            username: user.username, 
            name: user.name,
            exp: req.newUser.exp
          }, 'secret');

          res.status(200).json({ token });
        }
      });
    })
    .catch(err => res.status(500).json({ Database: "Could not find User", err }))
});

export default router;