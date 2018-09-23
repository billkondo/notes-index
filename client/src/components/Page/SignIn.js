import React from 'react';
import { Link } from 'react-router-dom';

import Fade from '../High_Order/Fade';

const SignIn = () => (
  <Link to="/SignIn">
    <i className="fas fa-sign-in-alt login-icon" />
    <span> Sign In </span>
  </Link>
);

export default Fade(SignIn);