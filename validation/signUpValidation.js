import Validator from 'validator';

export default (data) => {
  let errors = {};

  if (Validator.isEmpty(data.username))
    errors.username = "This field is required";
  else 
    if (!Validator.isAlphanumeric(data.username))
      errors.username = "Username may only contain alphanumeric characters";

  if (Validator.isEmpty(data.email))
    errors.email = "This field is required";
  else  
    if (!Validator.isEmail(data.email))
      errors.email = "Invalid Email";
  
  if (Validator.isEmpty(data.password))
    errors.password = "This field is required";

  if (Validator.isEmpty(data.passwordConfirmation))
    errors.passwordConfirmation = "This field is required";
  else
    if (!Validator.equals(data.password, data.passwordConfirmation)) 
      errors.passwordConfirmation = "Password do not match";

  return errors;
}