import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

import { exitView, enterMenu } from '../../../actions/notes-router';
import { resetNote } from '../../../actions/notes-operations';

const Header= ({ title, transitionViewToMenu }) => (
  <div id="header-view">
    <div id="title-box">
      <div id="title-icon"><i className="fas fa-quote-left" /></div>
      <div id="title"> {title} </div>
    </div>
    <ExitButton click={transitionViewToMenu} />
  </div>
);

Header.propTypes = {
  title: propTypes.string, 
  transitionViewToMenu: propTypes.func
}

export default connect(
  (state) => ({
    title: state.notesOperations.title
  }),
  (dispatch) => ({
    transitionViewToMenu: () => {
      dispatch(exitView());
      setTimeout(() => {
        dispatch(enterMenu());
        dispatch(resetNote());
      }, 500);
    }
  })
)(Header);