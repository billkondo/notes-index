import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { exitMenu, enterCreate } from '../../../actions/notes-routes';
import { exitNotesMenu, enterNotesCreate } from '../../../actions/css-transitions';


import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';;

const ContainerFunctionsUI = ({ transitionMenuToCreate }) => (
  <div id="container-functions" >
    <Button onClick={transitionMenuToCreate} > Create </Button>
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
    }
  })
)(ContainerFunctionsUI);

export default ContainerFunctions;