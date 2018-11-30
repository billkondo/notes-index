import { isEmpty } from 'validator';

import TestPasswordMatch from '../utils/test-password-match';
import { findUserByUsername, findUserByEmail } from '../utils/find-one-user-in-database';

/*
  Do the verification of the user
  Test email or username, and password
  INPUT: User object
  OUTPUT: Errors object / Authentication Token
*/

// Validate user and password input
const inputValidation = (user, password) => {
  const errors = {};

  if (isEmpty(user)) errors.user = 'This field is required';

  if (isEmpty(password)) errors.password = 'This field is required';

  return errors;
};

// Verify User in Database and return token if everything matches
const verifyUserByUsername = (user, password) =>
  new Promise((resolve, reject) => {
    findUserByUsername(user)
      .then(userDatabase => {
        TestPasswordMatch(userDatabase, password)
          .then(token => resolve(token))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });

// Verify User in Database and return token if everything matches
const verifyUserByEmail = (user, password) =>
  new Promise((resolve, reject) => {
    findUserByEmail(user)
      .then(userDatabase => {
        TestPasswordMatch(userDatabase, password)
          .then(token => resolve(token))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });

export default (req, res, next) => {
  const { user, password } = req.body;
  const errors = inputValidation(user, password);

  Promise.all([verifyUserByUsername(user, password), verifyUserByEmail(user, password)])
    .then(results => {
      const usernameToken = results[0];
      const emailToken = results[1];

      if (!isEmpty(results[0])) req.token = usernameToken;
      else if (!isEmpty(results[1])) req.token = emailToken;
      else errors.match = 'Creditials do not match';

      req.errors = errors;
      next();
    })
    .catch(serverError => res.status(500).json({ serverError }));
};
