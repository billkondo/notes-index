import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ExitButton from '../Buttons/ExitButton';

import {
  closeCreateNote
} from '../../actions/notes-menu';

const HeaderUI = (props) => (
  <div id="header">
    <div id="header-title"> Create Note </div>

    <ExitButton click={props.close} />
  </div>
);

HeaderUI.propTypes = {
  close: propTypes.func.isRequired
}

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote())
  })
)(HeaderUI);


export default Header;