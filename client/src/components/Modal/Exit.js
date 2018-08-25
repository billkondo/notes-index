import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import { endExitModal } from '../../actions/modal';

const ExitUI = ({ exitModalRender, endExitModal, exit }) => (
  <CSSTransition
    in={exitModalRender}
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
    <div className="modal-exit-page">
      <div className="modal-exit-box">
        <div className="modal-exit-title"> Warning </div>
        <div className="modal-exit-text">
          <p> You will exit this menu.</p>
          <p> All your changes will be lost! </p>
        </div>
        <div className="modal-exit-buttons">
          <button className="modal-exit-button modal-red" onClick={exit} >
            EXIT
          </button>

          <button className="modal-exit-button modal-green" onClick={endExitModal} >
            STAY
          </button>
        </div>
      </div>
    </div>
  </CSSTransition>
);

ExitUI.propTypes = {
  exitModalRender: propTypes.bool.isRequired,
  endExitModal: propTypes.func.isRequired,
  exit: propTypes.func.isRequired
}

const Exit = connect(
  (state) => ({
    exitModalRender: state.modal.exitModalRender
  }),
  (dispatch) => ({
    endExitModal: () => dispatch(endExitModal())
  })
)(ExitUI)

export default Exit;