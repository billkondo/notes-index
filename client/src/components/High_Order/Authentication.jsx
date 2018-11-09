import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export default Component => {
  class Auth extends React.Component {
    componentWillMount() {
      const { isAuthenticated, history } = this.props;

      if (!isAuthenticated) history.push('/SignIn');
    }

    componentWillUpdate(nextProps) {
      const { history } = this.props;

      if (!nextProps.isAuthenticated) history.push('/SignIn');
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  Auth.propTypes = {
    isAuthenticated: propTypes.bool.isRequired
  };

  return connect(state => ({
    isAuthenticated: state.authentication.isAuthenticated
  }))(Auth);
};
