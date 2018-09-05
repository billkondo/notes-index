import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <Link to="/SignIn">
    <i className="fas fa-sign-in-alt login-icon" />
    <span> Sign In </span>
  </Link>
);

export default Login;