import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'reactstrap';
import { bool, string, func } from 'prop-types';

import { endModal } from '../../actions/modal';

class Modal extends React.Component {
  componentWillUpdate(nextProps) {
    if (!this.props.modalRender && nextProps.modalRender)
      document.addEventListener('mousedown', this.handleClick, false);

    if (this.props.modalRender && !nextProps.modalRender)
      document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    const { endModal } = this.props;
    if (this.node.contains(e.target)) return;
    endModal();
  }
  
  render() {
    const { modalRender, endModal, exitFunction, redButton, greenButton, WarningMessage } = this.props;

    return (
      <CSSTransition
        in={modalRender}
        timeout={{
          enter: 500,
          exit: 0
        }}
        classNames={{
          enter: "animated",
          exit: "animated",
          enterActive: "fadeIn faster"
        }}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className="modal-page">
          <div className="modal-box" ref={node => this.node = node}>
            <div className="modal-title"> Warning </div>
            <WarningMessage />

            <div className="modal-buttons">
              <Button color="danger" className="modal-button" onClick={exitFunction} >
                {redButton}
              </Button>

              <Button color="success" className="modal-button" onClick={endModal} >
                {greenButton}
              </Button>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

Modal.propTypes = {
  modalRender: bool.isRequired,
  endModal: func.isRequired,
  exitFunction: func.isRequired,
  redButton: string.isRequired,
  greenButton: string.isRequired,
  WarningMessage: func.isRequired
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