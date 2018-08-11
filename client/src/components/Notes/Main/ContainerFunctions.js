import React from 'react';
import { connect } from 'react-redux';
import { enterCreateNote } from '../../../actions/notes-menu';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';;

const ContainersFunctionsUI = (props) => (
  <div id="functions" >
    <Button onClick={props.createNewNote} > Create </Button>
  </div>
);

const ContainersFunctions = connect(
  (state) => ({}),
  (dispatch) => ({
    createNewNote: () => dispatch(enterCreateNote())
  })
)(ContainersFunctionsUI);

export default ContainersFunctions;