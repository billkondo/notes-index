import React from 'react';
import { connect } from 'react-redux';

import NoteDisplay from './NoteDisplay';

const UserNotesPresent = (props) => (
  <div id="user-notes">
    {
      props.notes.map((value, index) => {
        return (
          <NoteDisplay key={index} note={value} id={index} />
        );
      })
    }
  </div>
);

const UserNotes = connect(
  (state) => ({
    notes: state.notesMenu.notes
  })
)(UserNotesPresent)

export default UserNotes;