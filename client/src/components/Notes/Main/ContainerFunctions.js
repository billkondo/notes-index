import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { exitMenu, enterCreate, startFilter } from '../../../actions/notes-router';

import { Button  } from 'reactstrap';;

const Functions = ({ transitionMenuToCreate, startFilter }) => (
  <div id="container-functions" >
    <Button id="menu-button-create" onClick={transitionMenuToCreate} > Create </Button>
    <Button id="menu-button-filter" onClick={startFilter} > Filter </Button>
  </div>
);

Functions.propTypes = {
  transitionMenuToCreate: propTypes.func.isRequired
}

export default connect(
  null, 
  (dispatch) => ({
    transitionMenuToCreate: () => {
      dispatch(exitMenu());
      setTimeout(() => dispatch(enterCreate()), 500);
    },
    startFilter: () => dispatch(startFilter())
  })
)(Functions);