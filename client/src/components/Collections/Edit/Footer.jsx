import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func, bool } from 'prop-types';

import { submitEditedCollection, deleteCollection } from '../../../actions/collections-operations';
import { startModal } from '../../../actions/modal';
import {
  goBackButton,
  deleteButton,
  DeleteMessageCollection,
  saveButton,
  SaveMessageCollection
} from '../../Modal/messages';

import { historyObject } from '../../../propTypes/propTypes';

class Footer extends React.Component {
  updateURL = () => {
    const { history } = this.props;
    history.push('/Collections');
  };

  editAction = () => {
    const { startModalConnect, submitEditedCollectionConnect } = this.props;
    startModalConnect(saveButton, goBackButton, SaveMessageCollection, () =>
      submitEditedCollectionConnect(this.updateURL)
    );
  };

  deleteAction = () => {
    const { startModalConnect, deleteCollectionConnect } = this.props;
    startModalConnect(deleteButton, goBackButton, DeleteMessageCollection, () =>
      deleteCollectionConnect(this.updateURL)
    );
  };

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
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  submitEditedCollectionConnect: func.isRequired,
  deleteCollectionConnect: func.isRequired,
  startModalConnect: func.isRequired,
  modalRender: bool.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    state => ({
      modalRender: state.modal.modalRender
    }),
    {
      submitEditedCollectionConnect: submitEditedCollection,
      deleteCollectionConnect: deleteCollection,
      startModalConnect: startModal
    }
  )(Footer)
);
