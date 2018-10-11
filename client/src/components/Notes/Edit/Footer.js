import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bool, func } from 'prop-types';

import { submitEditedNote, deleteNote } from '../../../actions/notes-operations';
import { startModal } from '../../../actions/modal';
import { goBackButton, deleteButton, DeleteMessage } from '../../Modal/messages';

const Footer = (props) => {
  const { isLoading, submitEditedNote, deleteNote, startModal } = props;
  const updateURL = () => props.history.push('/Notes');
  const deleteAction = () => startModal(deleteButton, goBackButton, DeleteMessage, () => deleteNote(updateURL));

  return (
    <div className="notes-edit-footer">
      <Button 
        disabled={isLoading} 
        color="success" 
        className="my-button" 
        onClick={() => submitEditedNote(updateURL)} 
      >
        Submit 
      </Button>

      <Button 
        disabled={isLoading} 
        color="danger"  
        className="my-button" 
        onClick={deleteAction} 
      > 
        <i className="fas fa-trash-alt"/>  
      </Button>
    </div>
  );
}

Footer.propTypes = {
  isLoading: bool.isRequired, 
  submitEditedNote: func.isRequired, 
  deleteNote: func.isRequired,
  startModal: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    isLoading: state.notesOperations.isLoading
  }), 
  { submitEditedNote, deleteNote, startModal }
)(Footer));