import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import NoteCard from './NoteCard';

const ContainerNotes = ({ notes, transition }) => (
  <div id="container-notes">
    {
      notes.map(value => <NoteCard key={value.id} note={value} transition={transition} />)
    }
  </div>
);

ContainerNotes.propTypes = {
  notes: propTypes.arrayOf(Object)
}

export default connect(
  (state) => ({
    notes: state.notesData.notes
  })
)(ContainerNotes)