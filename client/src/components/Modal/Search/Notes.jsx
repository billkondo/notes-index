import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';

import Note from './Note';
import Loading from '../../Animation/Loading';

const Notes = ({ notes, id, setId, isLoadingNotes }) => (
  <div className={classNames({"transparent-background": isLoadingNotes }, {"black-background": !isLoadingNotes }, "search-notes")}>
    { isLoadingNotes && <Loading /> }

    { 
      !isLoadingNotes && 
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
    notes: state.searchMenu.notes,
    isLoadingNotes: state.searchMenu.isLoadingNotes
  })
)(Notes);