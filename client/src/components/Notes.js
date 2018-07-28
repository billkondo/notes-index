import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

class Notes extends React.Component {
  state = {
    modal: false
  }

  toggleModal = () => 
    this.setState((prevState) => { 
      return { modal: !prevState.modal };
    });

  render() {
    return (
      <div id="notes">
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Add a Note </ModalHeader>
          <ModalBody className="notes-modal-body">
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>

        <div id="notes-title">
          Notes
        </div>

        <Button color="info" onClick={this.toggleModal} className="notes-add-button"> ADD </Button>{' '}

        <div id="notes-section">
        </div>
      </div>
    );
  }
}

export default Notes;