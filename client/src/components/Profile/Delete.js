import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { deleteButton, goBackButton, DeleteAccountMessage } from '../Modal/messages';
import { startModal } from '../../actions/modal';

const Delete = ({ startModal }) => {
  
  const deleteAccount = () => {
    /*
      TODO: do account deleting
    */
  }

  const onClick = () => startModal(deleteButton, goBackButton, DeleteAccountMessage, deleteAccount);

  return (
    <div className="ProfileDelete">
      <div className="DeleteTitle">Delete Profile </div>
      <div className="DeleteWarning"> This operation cannot be undone. Be careful! </div>
      <Button onClick={onClick} color="danger"> Delete </Button>
    </div>
  );
}

export default connect(
  null, 
  { startModal }
)(Delete);