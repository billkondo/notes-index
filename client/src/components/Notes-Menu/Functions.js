import React from 'react';
import { connect } from 'react-redux';
import { enterCreateNote } from '../../actions/notes-menu';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';;

const FunctionPresent = (props) => (
  <div id="functions" >
    <Button onClick={props.createNewNote} > Create </Button>
  </div>
);

const Function = connect(
  (state) => ({}),
  (dispatch) => ({
    createNewNote: () => dispatch(enterCreateNote())
  })
)(FunctionPresent);

export default Function;