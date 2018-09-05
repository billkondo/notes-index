import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Header from './Header';
import SignUp from '../SignUp/SignUp';

class Page extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div id="app">
        <Header />

        {
          !isAuthenticated &&
          <SignUp />
        }
      </div>
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