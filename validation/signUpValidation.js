import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import User from '../models/user';

export default data => {
  const errors = {};

  if (Validator.isEmpty(data.username)) errors.username = 'This field is required';
  else if (!Validator.isAlphanumeric(data.username))
    errors.username = 'Username may only contain alphanumeric characters';
  else {
    User.findOne({ username: data.username })
      .select('username')
      .exec()
      .then(user => {
        if (!isEmpty(user)) errors.username = 'This username was already taken';
      });
  }

  if (Validator.isEmpty(data.email)) errors.email = 'This field is required';
  else if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
  else {
    User.findOne({ email: data.email })
      .select('email')
      .exec()
      .then(user => {
        if (!isEmpty(user)) errors.email = 'This email is already being used';
      });
  }

  if (Validator.isEmpty(data.password)) errors.password = 'This field is required';

  if (Validator.isEmpty(data.passwordConfirmation))
    errors.passwordConfirmation = 'This field is required';
  else if (!Validator.equals(data.password, data.passwordConfirmation))
    errors.passwordConfirmation = 'Password do not match';

  return errors;
};
