import React from 'react';
import styled from 'styled-components';

import Fade from '../High_Order/Fade';
import SignUpForm from './SignUpForm';
import Welcome from './Welcome';

// const SignUp = styled.div`
//   width: 100vh;
//   height: 35rem;

//   display: grid;
//   justify-items: center;
// `;

const SignUp = () => (
  <div className="sign-up">
    <div className="sign-up-page">
      <SignUpForm />
      <Welcome />
    </div>
  </div>
);

export default Fade(SignUp);
