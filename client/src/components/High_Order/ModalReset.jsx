import React from 'react';
import { connect } from 'react-redux';

import { resetModal } from '../../actions/modal';
import { exitSearchMenu } from '../../actions/search-menu';
import { viewCollectionExit, viewNoteExit } from '../../actions/view';

export default Component => {
  class Modal extends React.Component {
    componentWillMount() {
      const {
        resetModalConnect,
        exitSearchMenuConnect,
        viewCollectionExitConnect,
        viewNoteExitConnect
      } = this.props;

      resetModalConnect();
      exitSearchMenuConnect();
      viewCollectionExitConnect();
      viewNoteExitConnect();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(
    null,
    {
      resetModalConnect: resetModal,
      exitSearchMenuConnect: exitSearchMenu,
      viewCollectionExitConnect: viewCollectionExit,
      viewNoteExitConnect: viewNoteExit
    }
  )(Modal);
};
