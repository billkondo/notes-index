import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { string, bool, func } from 'prop-types';

import ViewUI from './ViewUI';

import { loadNote } from '../../../actions/notes-operations';
import { viewNoteEnter, viewNoteExit, importNote } from '../../../actions/view';

class View extends React.Component {
  componentDidUpdate(prevProps) {
    const { idToLoad: prevID } = prevProps;
    const { idToLoad: curID } = this.props;

    const {
      loadNoteConnect,
      viewNoteEnterConnect,
      viewNoteExitConnect,
      importNoteConnect
    } = this.props;

    if (prevID && !curID) viewNoteExitConnect();

    if (!prevID && curID) {
      importNoteConnect(curID)
        .then(note => {
          loadNoteConnect(note);
          viewNoteEnterConnect();
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { viewNote } = this.props;

    return (
      <CSSTransition
        in={viewNote}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={{
          enter: 'animated',
          exit: 'animated',
          enterActive: 'fadeIn faster',
          exitActive: 'fadeOut faster'
        }}
      >
        <ViewUI />
      </CSSTransition>
    );
  }
}

View.propTypes = {
  idToLoad: string.isRequired,
  viewNote: bool.isRequired,
  loadNoteConnect: func.isRequired,
  viewNoteEnterConnect: func.isRequired,
  viewNoteExitConnect: func.isRequired,
  importNoteConnect: func.isRequired
};

export default connect(
  state => ({
    idToLoad: state.notesData.idToLoad,
    viewNote: state.view.viewNote
  }),
  {
    loadNoteConnect: loadNote,
    viewNoteEnterConnect: viewNoteEnter,
    viewNoteExitConnect: viewNoteExit,
    importNoteConnect: importNote
  }
)(View);
