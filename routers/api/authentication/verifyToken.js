import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) res.status(200).json({ success: false, err });
      else res.status(200).json({ success: true });
    });
  }
  else
    res.status(403).json({ error: "Authorization Header does not exist "});
})

export default router;