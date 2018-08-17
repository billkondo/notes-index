import React from 'react';
import { connect } from 'react-redux';
import ExitButton from '../../Buttons/ExitButton';

import { exitNotesEdit, enterNotesMenu } from '../../../actions/css-transitions';
import { exitEdit, enterMenu } from '../../../actions/notes-routes';

const HeaderUI = ({ transitionEditToMenu }) => (
  <div id="header-edit">
    <div id="header-title"> Edit Note </div>
    <ExitButton click={transitionEditToMenu} />
  </div>
);


const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    transitionEditToMenu: () => {
      dispatch(exitNotesEdit());

      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitEdit());
        dispatch(enterMenu());
      }, 500);
    }
  })
)(HeaderUI);

export default Header;