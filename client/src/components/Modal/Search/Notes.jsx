import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';

import Note from './Note';
import Loading from '../../Animation/Loading';

import { notesArray } from '../../../propTypes/propTypes';

const Notes = ({ notes, id, setId, isLoadingNotes }) => (
  <div
    className={classNames(
      { 'transparent-background': isLoadingNotes },
      { 'black-background': !isLoadingNotes },
      'search-notes'
    )}
  >
    {isLoadingNotes && <Loading />}

    {!isLoadingNotes &&
      notes.map((value, index) => (
        <Note
          key={value.id}
          note={value}
          index={index % 2}
          isOpen={id === value.id}
          setId={setId}
        />
      ))}
  </div>
);

Notes.propTypes = {
  id: string.isRequired,
  setId: func.isRequired,
  notes: notesArray.isRequired,
  isLoadingNotes: bool.isRequired
};

export default connect(state => ({
  notes: state.searchMenu.notes,
  isLoadingNotes: state.searchMenu.isLoadingNotes
}))(Notes);
