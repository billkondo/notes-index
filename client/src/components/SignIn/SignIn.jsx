import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import ErrorMessage from './ErrorMessage';
import SignInForm from './SignInForm';

import { historyObject } from '../../propTypes/propTypes';

class SignIn extends React.Component {
  state = {
    errors: {}
  };

  componentWillUpdate(nextProps) {
    const { history } = this.props;
    if (nextProps.isAuthenticated) history.push('/');
  }

  setErrors = errors => this.setState({ errors });

  render() {
    const { errors } = this.state;

    return (
      <div className="sign-in-page">
        <div className="sign-in">
          <div className="sign-in-logo"> NOTES INDEX </div>

          <ErrorMessage message={errors.match} shouldRender={!isEmpty(errors.match)} />

          <div className="sign-in-form-container">
            <SignInForm errors={errors} setErrors={this.setErrors} />
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: historyObject.isRequired
};

export default connect(state => ({
  isAuthenticated: state.authentication.isAuthenticated
}))(SignIn);
