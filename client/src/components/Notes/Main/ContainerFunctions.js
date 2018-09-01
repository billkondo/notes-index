import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { exitMenu, enterCreate, startFilter } from '../../../actions/notes-routes';
import { exitNotesMenu, enterNotesCreate } from '../../../actions/css-transitions';


import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';;

const ContainerFunctionsUI = ({ transitionMenuToCreate, startFilter }) => (
  <div id="container-functions" >
    <Button id="menu-button-create" onClick={transitionMenuToCreate} > Create </Button>
    <Button id="menu-button-filter" onClick={startFilter} > Filter </Button>
  </div>
);

ContainerFunctionsUI.propTypes = {
  transitionMenuToCreate: propTypes.func.isRequired
}

const ContainerFunctions = connect(
  (state) => ({}),
  (dispatch) => ({
    transitionMenuToCreate: () => {
      dispatch(exitNotesMenu());

      setTimeout(() => {
        dispatch(enterNotesCreate());
        dispatch(exitMenu());
        dispatch(enterCreate());
      }, 500);
    },
    startFilter: () => dispatch(startFilter())
  })
)(ContainerFunctionsUI);

export default ContainerFunctions;