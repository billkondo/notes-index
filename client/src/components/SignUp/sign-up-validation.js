import Validator from 'validator';

export const isValid = (data) => {
  let errors = {};

  if (Validator.isEmpty(data.username)) 
    errors.username = "This field is required";
  else 
    if (data.username.indexOf(" ") !== -1)
      errors.username = "Username can't have whitespaces"

  if (Validator.isEmpty(data.email)) 
    errors.email = "This field is required";
  else 
    if (!Validator.isEmail(data.email))
      errors.email = "Enter a valid email"

  if (Validator.isEmpty(data.password))
    errors.password = "This field is required";

  if (Validator.isEmpty(data.passwordConfirmation))
    errors.passwordConfirmation = "This field is required";

  return errors;
}