import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

import { startModal } from '../../../actions/modal';
import { exitButton, stayButton, ExitMessage } from '../../Modal/messages';

const Header = ({ startModal, exitFunction}) => (
  <div id="header-create">
    <div id="header-title"> Create Note </div>
    <ExitButton click={() => startModal(exitFunction)} />
  </div>
);

Header.propTypes = {
  startModal: propTypes.func.isRequired,
  exitFunction: propTypes.func.isRequired
}

export default connect(
  null,
  (dispatch) => ({
    startModal: (exitFunction) => dispatch(startModal(exitButton, stayButton, ExitMessage, exitFunction))
  })
)(Header);