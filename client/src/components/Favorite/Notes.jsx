import React from 'react';

import CardNote from '../Notes/Main/Card';

import { notesArray } from '../../propTypes/propTypes';

const Notes = ({ notes }) => (
  <React.Fragment>
    {notes.map(value => (
      <CardNote key={value.id} note={value} />
    ))}
  </React.Fragment>
);

Notes.propTypes = {
  notes: notesArray.isRequired
};

export default Notes;
