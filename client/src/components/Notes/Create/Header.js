import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ExitButton from '../../Buttons/ExitButton';

import {
  closeCreateNote
} from '../../../actions/notes-menu';

const HeaderUI = (props) => {
  const click = () => {
    props.closeMenu();
    setTimeout(() => props.close(), 500);
  }

  return (
    <div id="header-create">
      <div id="header-title"> Create Note </div>

      <ExitButton click={click} />
    </div>
  );
}

HeaderUI.propTypes = {
  close: propTypes.func.isRequired,
  closeMenu: propTypes.func
}

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote())
  })
)(HeaderUI);


export default Header;