import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import { exitNotesView, enterNotesMenu } from '../../../actions/css-transitions';
import { exitView, enterMenu } from '../../../actions/notes-routes';
import { resetNote } from '../../../actions/notes-operations';

const HeaderUI = ({ title, transitionViewToMenu }) => (
  <div id="header-view">
    <div id="title-box">
      <div id="title-icon"><i className="fas fa-quote-left" /></div>
      <div id="title"> {title} </div>
    </div>
    <ExitButton click={transitionViewToMenu} />
  </div>
);

HeaderUI.propTypes = {
  title: propTypes.string, 
  transitionViewToMenu: propTypes.func
}

const Header = connect(
  (state) => ({
    title: state.notesOperations.title
  }),
  (dispatch) => ({
    transitionViewToMenu: () => {
      dispatch(exitNotesView());
      
      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitView());
        dispatch(enterMenu());
        dispatch(resetNote());
      }, 500);
    }
  })
)(HeaderUI);

export default Header;