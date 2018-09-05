import React from 'react';
import InputText from '../Input/InputText';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

class SignUpFrom extends React.Component {
  state = {
    username: "", 
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: {},
    isLoading: false,
    isUserUnique: true
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = () => {
    const { username, email, password, passwordConfirmation} = this.state;

    this.setState({ isLoading: true, errors: {} });

    const info = { username, email, password, passwordConfirmation };

    axios
      .post('/api/auth/signup', info).then(res => {
        const newErrors = res.data.errors;

        if (isEmpty(newErrors)) {
          this.setState({ 
            username: "",
            email: "",
            password: "",
            passwordConfirmation: ""
          });
        }

        this.setState({ isLoading: false, errors: newErrors });
      });
  }

  render() {
    const { username, email, password, passwordConfirmation, isLoading, errors } = this.state;

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