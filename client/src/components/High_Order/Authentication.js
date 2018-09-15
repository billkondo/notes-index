import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export default (Component) => {
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated)
        this.props.history.push('/SignIn');
    } 

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated)
        this.props.history.push('/SignIn');
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  Auth.propTypes = {
    isAuthenticated: propTypes.bool.isRequired
  }

  return connect(
    (state) => ({
      isAuthenticated: state.authentication.isAuthenticated
    })
  )(Auth);
}