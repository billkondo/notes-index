import React from 'react';
import propTypes from 'prop-types';

const NoteCard = ({ note, transition }) =>(
  <div className="note-card">
    <div className="note-display-header">
      <div className="note-display-title"> {note.title} </div>
      <div className="controls">
        <div className="edit" onClick={() => transition(`/Notes/Edit/${note.id}`, note.id)} > <i className="fas fa-edit" /> </div>
        <div className="view" onClick={() => transition(`/Notes/View/${note.id}`, note.id)} > <i className="fas fa-eye" /> </div>
      </div>
    </div>

    {/* <div className="description">
      <Editor editorState={EditorState.createWithContent(parseContent(note.description))} readOnly={true} />
    </div> */}
  </div>
);

NoteCard.propTypes = {
  note: propTypes.object.isRequired
}

export default NoteCard;