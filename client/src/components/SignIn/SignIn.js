import React from 'react';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
  render() {
    return (
      <div className="sign-in-page">
        <div className="sign-in">
          <div className="sign-in-logo"> Notes Index </div>

          <SignInForm />
        </div>
      </div>
    );
  }
}

export default SignIn;