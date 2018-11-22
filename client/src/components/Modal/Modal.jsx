import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'reactstrap';
import { bool, string, func } from 'prop-types';

import { endModal, startLoadingModalData, endLoadingModalData } from '../../actions/modal';

class Modal extends React.Component {
  componentWillUpdate(nextProps) {
    const { modalRender, endLoadingModalDataConnect } = this.props;

    if (!modalRender && nextProps.modalRender) {
      document.addEventListener('mousedown', this.handleClick, false);
      endLoadingModalDataConnect();
    }

    if (modalRender && !nextProps.modalRender)
      document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    const { endModalConnect } = this.props;
    if (this.node.contains(e.target)) return;
    endModalConnect();
  };

  render() {
    const {
      modalRender,
      endModalConnect,
      exitFunction,
      redButton,
      greenButton,
      WarningMessage,
      isLoading,
      startLoadingModalDataConnect
    } = this.props;

    return (
      <CSSTransition
        in={modalRender}
        timeout={{
          enter: 500,
          exit: 0
        }}
        classNames={{
          enter: 'animated',
          exit: 'animated',
          enterActive: 'fadeIn faster'
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal-page">
          <div
            className="modal-box"
            ref={node => {
              this.node = node;
            }}
          >
            <div className="modal-title"> Warning </div>
            <WarningMessage />

            <div className="modal-buttons">
              <Button
                color="danger"
                className="modal-button"
                onClick={() => {
                  startLoadingModalDataConnect();
                  exitFunction();
                }}
                disabled={isLoading}
              >
                {redButton}
              </Button>

              <Button color="success" className="modal-button" onClick={endModalConnect}>
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
  endModalConnect: func.isRequired,
  exitFunction: func.isRequired,
  redButton: string.isRequired,
  greenButton: string.isRequired,
  WarningMessage: func.isRequired,
  startLoadingModalDataConnect: func.isRequired,
  endLoadingModalDataConnect: func.isRequired,
  isLoading: bool.isRequired
};

export default connect(
  state => ({
    modalRender: state.modal.modalRender,
    redButton: state.modal.redButton,
    greenButton: state.modal.greenButton,
    WarningMessage: state.modal.WarningMessage,
    exitFunction: state.modal.exitFunction,
    isLoading: state.modal.isLoading
  }),
  {
    endModalConnect: endModal,
    startLoadingModalDataConnect: startLoadingModalData,
    endLoadingModalDataConnect: endLoadingModalData
  }
)(Modal);
