import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bool, func } from 'prop-types';

import { submitEditedNote, deleteNote } from '../../../actions/notes-operations';
import { startModal } from '../../../actions/modal';
import {
  goBackButton,
  deleteButton,
  DeleteMessage,
  saveButton,
  SaveMessage
} from '../../Modal/messages';

import { historyObject } from '../../../propTypes/propTypes';

class Footer extends React.Component {
  updateURL = () => {
    const { history } = this.props;
    history.push('/Notes/');
  };

  editAction = () => {
    const { startModalConnect, submitEditedNoteConnect } = this.props;
    startModalConnect(saveButton, goBackButton, SaveMessage, () =>
      submitEditedNoteConnect(this.updateURL)
    );
  };

  deleteAction = () => {
    const { startModalConnect, deleteNoteConnect } = this.props;
    startModalConnect(deleteButton, goBackButton, DeleteMessage, () =>
      deleteNoteConnect(this.updateURL)
    );
  };

  render() {
    const { modalRender } = this.props;

    return (
      <div className="notes-edit-footer">
        <Button
          disabled={modalRender}
          color="success"
          className="my-button"
          onClick={this.editAction}
        >
          Submit
        </Button>

        <Button
          disabled={modalRender}
          color="danger"
          className="my-button"
          onClick={this.deleteAction}
        >
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  submitEditedNoteConnect: func.isRequired,
  deleteNoteConnect: func.isRequired,
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
      submitEditedNoteConnect: submitEditedNote,
      deleteNoteConnect: deleteNote,
      startModalConnect: startModal
    }
  )(Footer)
);
