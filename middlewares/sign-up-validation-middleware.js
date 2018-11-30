import { isEmail, isAlphanumeric, equals } from 'validator';
import isEmpty from 'lodash/isEmpty';

import { findUserByUsername, findUserByEmail } from '../utils/find-one-user-in-database';

// Do the verification of the new user
// Test username, email, password, password confirmation
// INPUT: User object
// OUTPUT: Errors object

export default (req, res, next) => {
  const errors = {};

  Promise.all([findUserByUsername(req.body.username), findUserByEmail(req.body.email)])
    .then(results => {
      const isUserUnique = isEmpty(results[0]);
      const isEmailUnique = isEmpty(results[1]);

      // Username Validation
      if (isEmpty(req.body.username)) {
        // Test if Username is not empty
        errors.username = 'This field is required';
      } else if (!isAlphanumeric(req.body.username)) {
        // Test Username characters
        errors.username = 'Username may only contain alphanumeric characters';
      } else if (!isUserUnique) {
        // Test Username uniqueness in Database
        errors.username = 'This username was already taken';
      }

      // Email Validation
      if (isEmpty(req.body.email)) {
        // Test if email is not empty
        errors.email = 'This field is required';
      } else if (!isEmail(req.body.email)) {
        // Test if Email is an valid type of email
        errors.email = 'Invalid Email';
      } else if (!isEmailUnique) {
        // Test Email uniqueness in Database
        errors.email = 'This email is already being used';
      }

      // Password Validation
      if (isEmpty(req.body.password)) {
        // Test if Password is not empty
        errors.password = 'This field is required';
      }

      // Password Confirmation Validation
      if (isEmpty(req.body.passwordConfirmation)) {
        // Test if password is not empty
        errors.passwordConfirmation = 'This field is required';
      } else if (!equals(req.body.password, req.body.passwordConfirmation)) {
        // Test if the password match
        errors.passwordConfirmation = 'Password do not match';
      }

      req.errors = errors;
      next();
    })
    .catch(serverError => res.status(500).json({ serverError }));
};
