import React from 'react';
import { connect } from 'react-redux';
import ExitButton from '../Buttons/ExitButton';

const HeaderUI = (props) => (
  <div id="edit-note-header">
    <div id="title"> Edit Note </div>
    <ExitButton />
  </div>
);

const Header = connect(
  
)(HeaderUI);

export default Header;