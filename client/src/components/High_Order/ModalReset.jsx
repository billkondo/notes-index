import React from 'react';
import { connect } from 'react-redux';

import { resetModal } from '../../actions/modal';
import { exitSearchMenu } from '../../actions/search-menu';

export default Component => {
  class Modal extends React.Component {
    componentWillMount() {
      const { resetModalConnect, exitSearchMenuConnect } = this.props;

      resetModalConnect();
      exitSearchMenuConnect();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(
    null,
    {
      resetModalConnect: resetModal,
      exitSearchMenuConnect: exitSearchMenu
    }
  )(Modal);
};
