import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

/*
  Promisse that checks if password matches user password.
  If they match, generate a token
  
  OUTPUT: Promise that returns a token
*/

export default (user, password) =>
  new Promise((resolve, reject) => {
    if (isEmpty(user)) resolve('');
    else {
      bcrypt.compare(password, user.passwordHash, (err, match) => {
        if (err) reject(err);

        if (match) {
          const token = jwt.sign(
            {
              username: user.username,
              name: user.name
            },
            'secret',
            { expiresIn: 60 * 60 }
          );

          resolve(token);
        } else resolve('');
      });
    }
  });
