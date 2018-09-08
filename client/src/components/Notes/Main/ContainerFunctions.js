import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { startFilter } from '../../../actions/notes-router';

import { Button  } from 'reactstrap';;

const Functions = ({ startFilter }) => (
  <div id="container-functions" >
    <Link id="menu-button-create" to='/Notes/Add'> Create </Link>
    <Button id="menu-button-filter" onClick={startFilter} > Filter </Button>
  </div>
);

Functions.propTypes = {
  startFilter: propTypes.func.isRequired
}

export default connect(
  null, 
  { startFilter }
)(Functions);