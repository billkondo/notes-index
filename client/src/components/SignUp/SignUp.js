import React from 'react';

import Fade from '../High_Order/Fade';
import SignUpForm from './SignUpForm';
import Welcome from './Welcome';

const SignUp = () => (
  <div className="sign-up">
    <div className="sign-up-page">
      <SignUpForm />
      <Welcome />
    </div>
  </div>
);

export default Fade(SignUp);