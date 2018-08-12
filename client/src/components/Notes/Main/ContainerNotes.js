import React from 'react';
import { connect } from 'react-redux';

import NoteCard from './NoteCard';

const ContainerNotesUI = (props) => (
  <div id="container-notes">
    {
      props.notes.map((value, index) => {
        return (
          <NoteCard key={index} note={value} id={index} />
        );
      })
    }
  </div>
);

const ContainerNotes = connect(
  (state) => ({
    notes: state.notesMenu.notes
  })
)(ContainerNotesUI)

export default ContainerNotes;