import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { deleteButton, goBackButton, DeleteAccountMessage } from '../Modal/messages';
import { startModal } from '../../actions/modal';

const Delete = ({ startModalConnect }) => {
  const deleteAccount = () => {
    /*
      TODO: do account deleting
    */
  };

  const onClick = () =>
    startModalConnect(deleteButton, goBackButton, DeleteAccountMessage, deleteAccount);

  return (
    <div className="ProfileDelete">
      <div className="DeleteTitle">Delete Profile </div>
      <div className="DeleteWarning"> This operation cannot be undone. Be careful! </div>
      <Button onClick={onClick} color="danger">
        Delete
      </Button>
    </div>
  );
};

Delete.propTypes = {
  startModalConnect: func.isRequired
};

export default connect(
  null,
  { startModalConnect: startModal }
)(Delete);
