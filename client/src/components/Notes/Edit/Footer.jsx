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

class Footer extends React.Component {
  updateURL = () => this.props.history.push('/Notes/');

  editAction = () => {
    const { startModal, submitEditedNote } = this.props;
    startModal(saveButton, goBackButton, SaveMessage, () => submitEditedNote(this.updateURL));
  };

  deleteAction = () => {
    const { startModal, deleteNote } = this.props;
    startModal(deleteButton, goBackButton, DeleteMessage, () => deleteNote(this.updateURL));
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
  submitEditedNote: func.isRequired,
  deleteNote: func.isRequired,
  startModal: func.isRequired,
  modalRender: bool.isRequired
};

export default withRouter(
  connect(
    state => ({
      modalRender: state.modal.modalRender
    }),
    { submitEditedNote, deleteNote, startModal }
  )(Footer)
);
