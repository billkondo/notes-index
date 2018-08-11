import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import { exitView } from '../../../actions/notes-menu';

const HeaderUI = ({ title, exit }) => (
  <div id="header-view">
    <div id="title"> {title} </div>
    <ExitButton click={exit} />
  </div>
);

HeaderUI.propTypes = {
  title: propTypes.string, 
  exit: propTypes.func
}

const Header = connect(
  (state) => ({
    title: state.viewNote.note.title
  }),
  (dispatch) => ({
    exit: () => dispatch(exitView())
  })
)(HeaderUI);

export default Header;