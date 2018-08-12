import React from 'react';
import { connect } from 'react-redux';
import { enterCreateNote } from '../../../actions/notes-menu';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';;

const ContainerFunctionsUI = (props) => (
  <div id="container-functions" >
    <Button onClick={props.createNewNote} > Create </Button>
  </div>
);

const ContainerFunctions = connect(
  (state) => ({}),
  (dispatch) => ({
    createNewNote: () => dispatch(enterCreateNote())
  })
)(ContainerFunctionsUI);

export default ContainerFunctions;