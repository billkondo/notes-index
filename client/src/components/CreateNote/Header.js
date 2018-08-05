import React from 'react';
import { connect } from 'react-redux';

// Components
import ExitButton from '../Buttons/ExitButton';

// Functions
import {
  closeCreateNote
} from '../../actions/notes-menu';

const HeaderPresent = (props) => (
  <div id="header">
    <div id="header-title"> Create Note </div>

    <ExitButton click={props.close} />
  </div>
);

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote())
  })
)(HeaderPresent);


export default Header;