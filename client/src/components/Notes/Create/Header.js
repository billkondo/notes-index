import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

import { startExitModal } from '../../../actions/modal';

const HeaderUI = ({ startExitModal }) => (
  <div id="header-create">
    <div id="header-title"> Create Note </div>
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