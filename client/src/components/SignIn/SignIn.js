import React from 'react';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
  state = {
    errors: {}
  }

  setErrors = (errors) => this.setState({ errors });

  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated) 
      this.props.history.push('/');
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="sign-in-page">
        <div className="sign-in">
          <div className="sign-in-logo"> Notes Index </div>

          { errors.match && <ErrorMessage message={errors.match} />}

          <div className="sign-in-form-container">
            <SignInForm errors={errors} setErrors={this.setErrors} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.authentication.isAuthenticated
  }) 
)(SignIn);