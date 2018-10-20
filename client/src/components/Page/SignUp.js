import React from 'react';
import { Link } from 'react-router-dom';

import Fade from '../High_Order/Fade';

const SignUp = () => (
  <Link to="/">
    <i className="fas fa-user-plus login-icon cyan-color" />
    <span> Sign Up </span>
  </Link>
);

export default Fade(SignUp);