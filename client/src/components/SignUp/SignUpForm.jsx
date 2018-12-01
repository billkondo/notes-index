import React from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { Alert } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import InputText from '../Input/InputText';

class SignUpFrom extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
    successInCreatingUser: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = () => {
    const { username, email, password, passwordConfirmation } = this.state;

    this.setState({ isLoading: true, errors: {}, successInCreatingUser: false });

    const info = { username, email, password, passwordConfirmation };

    axios.post('/api/user/signUp', info).then(res => {
      const newErrors = res.data.errors;

      if (isEmpty(newErrors)) {
        // User was created

        this.setState({
          username: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          successInCreatingUser: true
        });
      }

      this.setState({ isLoading: false, errors: newErrors });
    });
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      isLoading,
      errors,
      successInCreatingUser
    } = this.state;

    return (
      <div className="sign-up-form">
        <CSSTransition
          in={successInCreatingUser}
          timeout={1000}
          classNames={{
            appear: 'animated',
            enter: 'animated',
            exit: 'animated',
            appearActive: 'fadeIn',
            enterActive: 'fadeIn',
            exitActive: 'fadeOut'
          }}
          mountOnEnter
          unmountOnExit
        >
          <Alert color="success" className="Alert">
            User was created! Confirm your Email to login.
          </Alert>
        </CSSTransition>

        <InputText
          name="username"
          onChange={this.onChange}
          label="Username"
          value={username}
          placeholder="Pick a username"
          type="text"
          error={errors.username}
        />

        <InputText
          name="email"
          onChange={this.onChange}
          label="Email"
          value={email}
          placeholder="email@example.com"
          type="email"
          error={errors.email}
        />

        <InputText
          name="password"
          onChange={this.onChange}
          label="Password"
          value={password}
          placeholder="Choose a password"
          type="password"
          error={errors.password}
        />

        <InputText
          name="passwordConfirmation"
          onChange={this.onChange}
          label="Confirm Password"
          value={passwordConfirmation}
          type="password"
          error={errors.passwordConfirmation}
        />

        <button type="button" className="sign-up-button" onClick={this.submit} disabled={isLoading}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUpFrom;
