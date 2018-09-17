import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <Link to="/">
    <i className="fas fa-user-plus login-icon" />
    <span> Sign Up </span>
  </Link>
);

export default SignUp;