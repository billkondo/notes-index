import React from 'react';
import { connect } from 'react-redux';

import { enterView } from '../../actions/notes-menu';
import { viewNoteLoad } from '../../actions/view-note';

const NoteDisplayPresent = (props) => {
  const prepareToEnterViewNote = () => {
    props
      .loadView(props.note)
      .then(() => props.toEnterView())
  }

  const prepareToEnterEditNote = () => {

  }

  return (
    <div className="note-display">
      <div className="note-display-header">
        <div className="note-display-title"> {props.note.title} </div>
        <div className="controls">
          <div className="edit" onClick={prepareToEnterEditNote}> <i className="fas fa-edit" /> </div>
          <div className="view" onClick={prepareToEnterViewNote}> <i className="fas fa-eye" /> </div>
        </div>
      </div>

      <div className="description">
        {props.note.description}
      </div>
    </div>
  );
}

const NoteDisplay = connect(
  (state) => ({
    idViewNote: state.notesMenu.idViewNote
  }),
  (dispatch) => ({
    loadView: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(viewNoteLoad(note)));
    }),
    toEnterView: () => dispatch(enterView())
  })
)(NoteDisplayPresent);

export default NoteDisplay;