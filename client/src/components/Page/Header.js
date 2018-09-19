import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Add from './Add';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { signOutUser } from '../../actions/authentication';

class PageHeader extends React.Component {
  logOut = () => {
    this.props.signOutUser();
    this.props.history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div id="page-header">
        <div id="page-middle">
          <p> Notes Index </p>

          {
            isAuthenticated && 
            <div id="page-user">
              <Add />
              <Profile logOut={this.logOut}/>
            </div>
          }

          {
            !isAuthenticated && 
            <div id="page-login">
              <SignIn />
              <SignUp />
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
  }),
  { signOutUser }
)(PageHeader);