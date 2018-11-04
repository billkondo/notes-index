import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { submitEditedCollection, deleteCollection } from '../../../actions/collections-operations';
import { startModal } from '../../../actions/modal';
import { goBackButton, deleteButton, DeleteMessageCollection, saveButton, SaveMessageCollection } from '../../Modal/messages';

const Footer = (props) => {
  const { submitEditedCollection, deleteCollection, startModal } = props;
  const updateURL = () => props.history.push('/Collections');
  const editAction = () => startModal(saveButton, goBackButton, SaveMessageCollection, () => submitEditedCollection(updateURL));
  const deleteAction = () => startModal(deleteButton, goBackButton, DeleteMessageCollection, () => deleteCollection(updateURL));

  return (
    <div className="collections-edit-footer">
      <Button 
        color="success" 
        className="my-button" 
        onClick={editAction} 
      >
        Submit 
      </Button>

      <Button 
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
  submitEditedCollection: func.isRequired, 
  deleteCollection: func.isRequired,
  startModal: func.isRequired
}

export default withRouter(connect(
  null,  
  { submitEditedCollection, deleteCollection, startModal }
)(Footer));