import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import { endModal } from '../../actions/modal';

const Modal = ({ modalRender, endModal, exitFunction, redButton, greenButton, WarningMessage }) => (
  <CSSTransition
    in={modalRender}
    timeout={500}
    classNames={{
      enter: "animated",
      exit: "animated",
      enterActive: "fadeIn faster",
      exitActive: "fadeOut faster"
    }}
    mountOnEnter={true}
    unmountOnExit={true}
  >
    <div className="modal-page">
      <div className="modal-box">
        <div className="modal-title"> Warning </div>
        <WarningMessage />

        <div className="modal-buttons">
          <button className="modal-button modal-red" onClick={exitFunction} >
            {redButton}
          </button>

          <button className="modal-button modal-green" onClick={endModal} >
            {greenButton}
          </button>
        </div>
      </div>
    </div>
  </CSSTransition>
);

Modal.propTypes = {
  modalRender: propTypes.bool.isRequired,
  endModal: propTypes.func.isRequired,
  exitFunction: propTypes.func.isRequired,
  redButton: propTypes.string.isRequired,
  greenButton: propTypes.string.isRequired,
  WarningMessage: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    modalRender: state.modal.modalRender,
    redButton: state.modal.redButton,
    greenButton: state.modal.greenButton,
    WarningMessage: state.modal.WarningMessage,
    exitFunction: state.modal.exitFunction
  }),
  { endModal }
)(Modal);