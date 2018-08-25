import React from 'react';
import { connect } from 'react-redux';
import ExitButton from '../../Buttons/ExitButton';
import propTypes from 'prop-types';

import { startExitModal } from '../../../actions/modal';

const HeaderUI = ({ startExitModal }) => (
  <div id="header-edit">
    <div id="header-title"> Edit Note </div>
    <ExitButton click={startExitModal} />
  </div>
);

HeaderUI.propTypes = {
  startExitModal: propTypes.func.isRequired
}

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    startExitModal: () => dispatch(startExitModal())
  })
)(HeaderUI);

export default Header;