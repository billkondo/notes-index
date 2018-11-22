import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default (password, user) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, user.passwordHash, (err, match) => {
      if (err) reject({ err: 'Could not authenticate' });

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
      } else reject({ match: 'Credentials are invalid' });
    });
  });
