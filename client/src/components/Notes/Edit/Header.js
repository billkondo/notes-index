import React from 'react';
import { connect } from 'react-redux';
import ExitButton from '../../Buttons/ExitButton';
import { exitEdit } from '../../../actions/notes-menu';

const HeaderUI = ({ exitEdit }) => (
  <div id="edit-note-header">
    <div id="title"> Edit Note </div>
    <ExitButton click={exitEdit}/>
  </div>
);

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    exitEdit: () => dispatch(exitEdit())
  })
)(HeaderUI);

export default Header;