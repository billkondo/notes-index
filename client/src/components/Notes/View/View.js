import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { string } from 'prop-types';

import ViewUI from './ViewUI';

import { loadNote } from '../../../actions/notes-operations';
import { viewNoteEnter, viewNoteExit, importNote } from '../../../actions/view';

class View extends React.Component {
  state = {
    isLoaded: false
  }

  componentDidUpdate(prevProps) {
    const prevID = prevProps.idToLoad;
    const curID = this.props.idToLoad;
    const { loadNote, viewNoteEnter, viewNoteExit, importNote } = this.props;

    if (prevID && !curID) viewNoteExit();

    if (!prevID && curID) {
      importNote(curID)
        .then(note => {
          loadNote(note);
          viewNoteEnter();
        })
        .catch(err =>console.log(err));
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
          enter: "animated", 
          exit: "animated", 
          enterActive: "fadeIn faster",
          exitActive: "fadeOut faster"
        }}
      >
        <ViewUI />
      </CSSTransition>
    );
  }
}

View.propTypes = {
  idToLoad: string.isRequired
}

export default connect(
  (state) => ({
    idToLoad: state.notesData.idToLoad,
    viewNote: state.view.viewNote
  }),
  { loadNote, viewNoteEnter, viewNoteExit, importNote }
)(View);