import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Add from './Add';
import Profile from './Profile';
import Login from './Login';

class PageHeader extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    
    return (
      <div id="page-header">
        <div id="page-middle">
          <p> Notes Index </p>

          {
            !isAuthenticated && 
            <div id="page-user">
              <Add />
              <Profile />
            </div>
          }

          {
            isAuthenticated && 
            <div id="page-login">
              <Login />
            </div>
          }
        </div>
      </div>
    );  
  }
}

PageHeader.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    isAuthenticated: state.authentication.isAuthenticated
  })
)(PageHeader);