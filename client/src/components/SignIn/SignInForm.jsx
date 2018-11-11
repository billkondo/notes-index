import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import decode from 'jsonwebtoken/decode';

import InputText from '../Input/InputText';

import setHeader from '../../authentication/setHeader';
import { setUser } from '../../actions/authentication';

class SignInForm extends React.Component {
  state = {
    user: '',
    password: '',
    isLoading: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  submit = () => {
    const { user, password } = this.state;
    const { setErrors, setUserConnect } = this.props;
    const info = { user, password };

    this.setState({ isLoading: true });
    setErrors({});

    axios.post('/api/auth/signin', info).then(res => {
      const { newErrors, token } = res.data;

      if (isEmpty(newErrors)) {
        setHeader(token);
        localStorage.setItem('jwtToken', token);
        setUserConnect(decode(token));
      } else {
        setErrors(newErrors);
        this.setState({ isLoading: false });
      }
    });
  };

  render() {
    const { user, password, isLoading } = this.state;
    const { errors } = this.props;

    return (
      <div className="sign-in-form">
        <InputText
          label="Username or email address"
          name="user"
          value={user}
          onChange={this.onChange}
          type="text"
          error={errors.user}
        />

        <InputText
          label="Password"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          error={errors.password}
        />

        <button type="button" className="sign-in-button" onClick={this.submit} disabled={isLoading}>
          Sign In
        </button>
      </div>
    );
  }
}

SignInForm.propTypes = {
  errors: propTypes.object.isRequired,
  setErrors: propTypes.func.isRequired,
  setUserConnect: propTypes.func.isRequired
};

export default connect(
  null,
  { setUserConnect: setUser }
)(SignInForm);
