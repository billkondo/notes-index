import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import ErrorMessage from './ErrorMessage';
import SignInForm from './SignInForm';

import { signInUser } from '../../actions/authentication';

class SignIn extends React.Component {
  state = {
    errors: {}
  }

  setErrors = (errors) => this.setState({ errors });

  render() {
    const { errors } = this.state;
    const { isAuthenticated } = this.props;

    if (isAuthenticated) 
      return (
        <Redirect push to='/' />
      );

    return (
      <div className="sign-in-page">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "animated",
            appearActive: "fadeIn fast"
          }}
          timeout={800}
          exit={false}
        >
          <div className="sign-in">
            <div className="sign-in-logo"> Notes Index </div>

            { errors.match && <ErrorMessage message={errors.match} />}

            <div className="sign-in-form-container">
              <SignInForm errors={errors} setErrors={this.setErrors} /> 
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

SignIn.propTypes = {
  isAuthenticated: propTypes.bool.isRequired, 
  signInUser: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    isAuthenticated: state.authentication.isAuthenticated
  }),
  (dispath) => ({
    signInUser: () => dispath(signInUser())
  })
)(SignIn);