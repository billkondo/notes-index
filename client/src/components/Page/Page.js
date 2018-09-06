import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Header from './Header';
import SignUp from '../SignUp/SignUp';
import Routers from '../Notes/Routes';
import CollectionsRouter from '../Collections/ColletionsRouter';

class Page extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div id="app">
        <Header />

        <div id="app-body">
          {
            !isAuthenticated &&
            <CollectionsRouter />
          }    
        </div>  
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