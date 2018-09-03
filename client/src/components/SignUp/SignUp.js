import React from 'react';
import SignUpForm from './SignUpForm';
import Welcome from './Welcome';

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <div className="sign-up-page">
          <SignUpForm />
          <Welcome />
        </div>
      </div>
    );
  }
}

export default SignUp;