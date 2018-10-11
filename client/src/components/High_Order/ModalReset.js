import React from 'react';
import { connect } from 'react-redux';

import { resetModal } from '../../actions/modal';

export default (Component) => {
  class Modal extends React.Component {
    componentWillMount() {
      const { resetModal } = this.props;
      
      resetModal();
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return connect(
    null, 
    { resetModal }
  )(Modal);
}