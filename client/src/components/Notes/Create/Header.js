import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ExitButton from '../../Buttons/ExitButton';

import {
  exitCreate,
  enterMenu
} from '../../../actions/notes-routes';

import {
  enterNotesMenu,
  exitNotesCreate
} from '../../../actions/css-transitions';

const HeaderUI = ({ transitionCreateToMenu }) => (
  <div id="header-create">
    <div id="header-title"> Create Note </div>
    <ExitButton click={transitionCreateToMenu} />
  </div>
);

HeaderUI.propTypes = {
  transitionCreateToMenu: propTypes.func.isRequired
}

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    transitionCreateToMenu: () => {
      dispatch(exitNotesCreate());

      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitCreate());
        dispatch(enterMenu());
      }, 500);
    }
  })
)(HeaderUI);


export default Header;