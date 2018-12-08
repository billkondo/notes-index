import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import decode from 'jsonwebtoken/decode';
import { func } from 'prop-types';

import { Form, FormGroup } from 'reactstrap';
import InputText from '../Input/InputText';

import setHeader from '../../authentication/setHeader';
import { setUser } from '../../actions/authentication';

import { errorsObject } from '../../propTypes/propTypes';

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

    axios.post('/api/user/signIn', info).then(res => {
      const { errors, token } = res.data;

      if (isEmpty(errors)) {
        setHeader(token);
        localStorage.setItem('jwtToken', token);
        setUserConnect(decode(token));
      } else {
        setErrors(errors);
        this.setState({ isLoading: false });
      }
    });
  };

  render() {
    const { user, password, isLoading } = this.state;
    const { errors } = this.props;

    return (
      <div className="sign-in-form">
        <Form>
          <FormGroup>
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
            <button
              type="button"
              className="sign-in-button"
              onClick={this.submit}
              disabled={isLoading}
            >
              Sign In
            </button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  errors: errorsObject.isRequired,
  setErrors: func.isRequired,
  setUserConnect: func.isRequired
};

export default connect(
  null,
  { setUserConnect: setUser }
)(SignInForm);
