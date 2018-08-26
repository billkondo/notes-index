import React from 'react';
import { connect } from 'react-redux';
import ExitButton from '../../Buttons/ExitButton';
import propTypes from 'prop-types';

import { startModal } from '../../../actions/modal';
import { exitButton, stayButton, ExitMessage } from '../../Modal/messages';

const HeaderUI = ({ startModal, exitFunction }) => (
  <div id="header-edit">
    <div id="header-title"> Edit Note </div>
    <ExitButton click={() => startModal(exitFunction)} />
  </div>
);

HeaderUI.propTypes = {
  startModal: propTypes.func.isRequired,
  exitFunction: propTypes.func.isRequired
}

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    startModal: (exitFunction) => dispatch(startModal(exitButton, stayButton, ExitMessage, exitFunction))
  })
)(HeaderUI);

export default Header;