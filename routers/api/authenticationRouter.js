import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

/*
  Authenticate user with token.
  
  Return a json object. 
  The field "success" is a boolean variable that indicates 
  if the user is alreay authenticated.
*/

router.get('/', (req, res) => {
  if (req.headers.authentication) {
    const token = req.headers.authentication.split(' ')[1];

    jwt.verify(token, 'secret', err => {
      if (err) res.status(200).json({ success: false, err });
      else res.status(200).json({ success: true });
    });
  } else res.status(403).json({ error: 'Authorization Header does not exist ' });
});

export default router;
