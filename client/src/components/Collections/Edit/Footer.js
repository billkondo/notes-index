import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bool, func } from 'prop-types';

import { submitEditedCollection, deleteCollection } from '../../../actions/collections-operations';
import { startModal } from '../../../actions/modal';
import { goBackButton, deleteButton, DeleteMessageCollection, saveButton, SaveMessageCollection } from '../../Modal/messages';

const Footer = (props) => {
  const { isLoading, submitEditedCollection, deleteCollection, startModal } = props;
  const updateURL = () => props.history.push('/Collections');
  const editAction = () => startModal(saveButton, goBackButton, SaveMessageCollection, () => submitEditedCollection(updateURL));
  const deleteAction = () => startModal(deleteButton, goBackButton, DeleteMessageCollection, () => deleteCollection(updateURL));

  return (
    <div className="collections-edit-footer">
      <Button 
        disabled={isLoading} 
        color="success" 
        className="my-button" 
        onClick={editAction} 
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
  submitEditedCollection: func.isRequired, 
  deleteCollection: func.isRequired,
  startModal: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    isLoading: state.notesOperations.isLoading
  }), 
  { submitEditedCollection, deleteCollection, startModal }
)(Footer));