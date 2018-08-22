import React from 'react';
import { connect } from 'react-redux';

import NoteCard from './NoteCard';

const ContainerNotesUI = (props) => (
  <div id="container-notes">
    {
      props.notes.map(value => {
        console.log(value);
        return (
          <NoteCard key={value.id} note={value} />
        );
      })
    }
  </div>
);


const ContainerNotes = connect(
  (state) => ({
    notes: state.notesData.notes
  })
)(ContainerNotesUI)

export default ContainerNotes;