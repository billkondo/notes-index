import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

const Notes = ({ notes }) => (
  <div className="search-notes">
    { 
      notes.map((value, index) => <Note key={value.id} note={value} index={index % 2} />)
    }
  </div>
);

export default connect(
  (state) => ({
    notes: state.notesData.notes
  })
)(Notes);