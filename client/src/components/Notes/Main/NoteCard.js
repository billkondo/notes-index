import React from 'react';
import propTypes from 'prop-types';

import Fade from '../../High_Order/Fade';

const NoteCard = ({ note, transition }) => (
  <div className="note-card">
    <div className="note-display-header">
      <div className="note-display-title"> {note.title} </div>
      <div className="controls">
        <div className="edit" onClick={() => transition(`/Notes/Edit/${note.id}`)} > <i className="fas fa-edit" /> </div>
        <div className="view" onClick={() => transition(`/Notes/View/${note.id}`)} > <i className="fas fa-eye" /> </div>
      </div>
    </div>

    <div className="description">
      {note.description}
    </div>
  </div>
);

NoteCard.propTypes = {
  note: propTypes.object.isRequired
}

export default Fade(NoteCard);