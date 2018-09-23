import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SignUp from '../SignUp/SignUp';

class Page extends React.Component {
  render() {
    return (
      <SignUp />
    );
  }
}

Page.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    isAuthenticated: state.authentication.isAuthenticated
  })
)
(Page);