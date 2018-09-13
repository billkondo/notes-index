import jwt from 'jsonwebtoken';
import User from '../models/user';

export default (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) res.status(403).json({ message: "Permission Denied", err });
      else {
        User
          .findOne({ username: decoded.username })
          .select("userId")
          .exec()
          .then(user => {
            req.userId = user.userId;
            next();
          })
          .catch(err => res.status(404).json({ message: "Could not find user", err }))
      }
    });
  }
  else
    res.status(403).json({ message: "Permission Denied "});
}