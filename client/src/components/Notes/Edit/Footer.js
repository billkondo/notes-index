import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import propTypes from 'prop-types';

import { startModal } from '../../../actions/modal';
import { saveButton, goBackButton, SaveMessage, deleteButton, DeleteMessage } from '../../Modal/messages';

const FooterUI = ({ startModalFinish, startModalDelete, finishEdit, deleteNote }) => (
  <div id="footer-edit">
    <Button color="success" className="footer-edit-finish-button" onClick={() => startModalFinish(finishEdit)}> Finish </Button>
    <div id="trash" onClick={() => startModalDelete(deleteNote)}>
      <i className="fas fa-trash-alt" />
    </div>
  </div>
);

FooterUI.propTypes = {
  startModalFinish: propTypes.func.isRequired, 
  startModalDelete: propTypes.func.isRequired, 
  finishEdit: propTypes.func.isRequired, 
  deleteNote: propTypes.func.isRequired
}

const Footer = connect(
  (state) => ({}),
  (dispatch) => ({
    startModalFinish: (finishEdit) => dispatch(startModal(saveButton, goBackButton, SaveMessage, finishEdit)),
    startModalDelete: (deleteNote) => dispatch(startModal(deleteButton, goBackButton, DeleteMessage, deleteNote))
  })
)(FooterUI);

export default Footer;