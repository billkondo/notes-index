import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';
import { exitButton, stayButton, ExitMessage } from '../../Modal/messages';
import { resetNote } from '../../../actions/notes-operations';
import { startModal, endModal } from '../../../actions/modal';

const Header = (props) => {
  const { startModal, resetNote, endModal } = props;

  const exit = () => {
    props.history.push('/Notes');
    resetNote();
    endModal();
  }

  const onClick = () => startModal(exitButton, stayButton, ExitMessage, exit);

  return (
    <div className="notes-header">
      <div className="title"> Add Note </div>
      <ExitButton click={onClick} />
    </div>
  );
}

export default withRouter(connect(
  null,
  { startModal, resetNote, endModal }
)(Header));