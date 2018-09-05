import Validator from 'validator';

export default ({ password, user }) => {
  let errors = {};

  if (Validator.isEmpty(user))
    errors.user = "This field is required";

  if (Validator.isEmpty(password)) 
    errors.password = "This field is required";

  return errors;
}