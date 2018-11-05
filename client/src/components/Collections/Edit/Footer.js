import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { submitEditedCollection, deleteCollection } from '../../../actions/collections-operations';
import { startModal } from '../../../actions/modal';
import { goBackButton, deleteButton, DeleteMessageCollection, saveButton, SaveMessageCollection } from '../../Modal/messages';

class Footer extends React.Component {
  updateURL = () => this.props.history.push('/Collections');

  editAction = () => {
    const { startModal , submitEditedCollection } = this.props;
    startModal(saveButton, goBackButton, SaveMessageCollection, () => submitEditedCollection(this.updateURL));
  }

  deleteAction = () => {
    const { startModal, deleteCollection } = this.props;
    startModal(deleteButton, goBackButton, DeleteMessageCollection, () => deleteCollection(this.updateURL));
  }

  render() {
    const { modalRender } = this.props;

    return (
      <div className="collections-edit-footer">
        <Button 
          color="success" 
          className="my-button" 
          onClick={this.editAction} 
          disabled={modalRender}
        >
          Submit 
        </Button>
    
        <Button 
          color="danger"  
          className="my-button" 
          onClick={this.deleteAction} 
          disabled={modalRender}
        > 
          <i className="fas fa-trash-alt"/>  
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  submitEditedCollection: func.isRequired, 
  deleteCollection: func.isRequired,
  startModal: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    modalRender: state.modal.modalRender
  }),  
  { submitEditedCollection, deleteCollection, startModal }
)(Footer));