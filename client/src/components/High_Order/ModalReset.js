import React from 'react';
import { connect } from 'react-redux';

import { resetModal } from '../../actions/modal';
import { exitSearchMenu } from '../../actions/search-menu';
import { viewCollectionExit, viewNoteExit } from '../../actions/view';

export default (Component) => {
  class Modal extends React.Component {
    componentWillMount() {
      const { resetModal, exitSearchMenu, viewCollectionExit, viewNoteExit } = this.props;
      
      resetModal();
      exitSearchMenu();
      viewCollectionExit();
      viewNoteExit();
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return connect(
    null, 
    { resetModal, exitSearchMenu, viewCollectionExit, viewNoteExit }
  )(Modal);
}