import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SignUp from '../SignUp/SignUp';
import GetStarted from '../GetStarted/GetStarted';

const Page = ({ isAuthenticated }) => (
  <React.Fragment>
    {isAuthenticated && <GetStarted />}
    {!isAuthenticated && <SignUp />}
  </React.Fragment>
);

Page.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default connect(state => ({
  isAuthenticated: state.authentication.isAuthenticated
}))(Page);
