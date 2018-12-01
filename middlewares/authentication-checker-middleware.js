import jwt from 'jsonwebtoken';
import User from '../models/userModel';

/*
  Middleware for checking if user is authenticated.
  Returns UserID to request.
*/

export default (req, res, next) => {
  // Check if authentication token is in the header
  if (req.headers.authentication) {
    const token = req.headers.authentication.split(' ')[1];

    // Try to decode token
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) res.status(403).json({ message: 'Permission Denied', err });
      else {
        User.findOne({ username: decoded.username })
          .select('userId')
          .exec()
          .then(user => {
            req.userId = user.userId;
            next();
          })
          .catch(error => res.status(404).json({ message: 'Could not find user', error }));
      }
    });
  } else res.status(403).json({ message: 'Permission Denied ' });
};
