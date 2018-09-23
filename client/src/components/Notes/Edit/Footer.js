import React from 'react';
import { Button } from 'reactstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({ finishEdit, deleteNote }) => (
  <div id="footer-edit">
    <Link color="success" className="footer-edit-finish-button" onClick={finishEdit} to='/Notes'> Finish </Link>
    
    <Link id="trash" onClick={deleteNote} to='/Notes'>
      <i className="fas fa-trash-alt" />
    </Link>
  </div>
);

Footer.propTypes = {
  finishEdit: propTypes.func.isRequired, 
  deleteNote: propTypes.func.isRequired
}

export default Footer;