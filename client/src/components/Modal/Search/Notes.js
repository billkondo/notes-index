import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Note from './Note';

const Notes = ({ notes, id, setId }) => (
  <div className="search-notes">
    { 
      notes.map((value, index) => 
        <Note 
          key={value.id} 
          note={value} 
          index={index % 2} 
          isOpen={id===value.id} 
          setId={setId}
        />
      )
    }
  </div>
);

Notes.propTypes = { 
  id: propTypes.string.isRequired, 
  setId: propTypes.func.isRequired, 
  notes: propTypes.arrayOf(propTypes.object).isRequired
}

export default connect(
  (state) => ({
    notes: state.notesData.notes
  })
)(Notes);