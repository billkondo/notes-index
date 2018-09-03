import React from 'react';
import InputText from './InputText';
import { isValid } from './sign-up-validation';
import isEmpty from 'lodash/isEmpty';

class SignUpFrom extends React.Component {
  state = {
    username: "", 
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: {},
    isLoading: false
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = () => {
    this.setState({ isLoading: true, errors: {} });

    const newErrors = isValid(this.state);

    if (isEmpty(newErrors)) {
      console.log('Right!');
    }

    this.setState({ isLoading: false, errors: newErrors });
  }

  render() {
    const { username, email, password, passwordConfirmation, isLoading, errors} = this.state;

    console.log(errors);

    return (
      <div className="sign-up-form">
        <InputText
          name="username"
          onChange={this.onChange}
          label="Username"
          value={username}
          placeholder="Pick a username"
          type={"text"}
          error={errors.username}
        />

        <InputText
          name="email"
          onChange={this.onChange}
          label="Email"
          value={email}
          placeholder="email@example.com"
          type={"email"}
          error={errors.email}
        />

        <InputText 
          name="password"
          onChange={this.onChange}
          label="Password"
          value={password}
          placeholder="Choose a password"
          type={"password"}
          error={errors.password}
        />

        <InputText 
          name="passwordConfirmation"
          onChange={this.onChange}
          label="Confirm Password"
          value={passwordConfirmation}
          type={"password"}
          error={errors.passwordConfirmation}
        />

        <button 
          className="sign-up-button" 
          onClick={this.submit} 
          disabled={isLoading}
        > 
          Sign Up 
        </button>
      </div>
    );
  }
}

export default SignUpFrom;