import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';
import { resetNote } from '../../../actions/notes-operations';

const Header = (props) => {
  const { resetNote } = props;

  const exit = () => {
    props.history.push('/Notes');
    resetNote();
  }

  const onClick = () => exit();

  return (
    <div className="notes-header">
      <div className="title"> Add Note </div>
      <ExitButton click={onClick} />
    </div>
  );
}

export default withRouter(connect(
  null,
  { resetNote }
)(Header));