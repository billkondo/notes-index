import React from 'react';
import { connect } from 'react-redux';

import { exitView } from '../../actions/notes-menu';

const HeaderViewPresent = (props) => (
  <div id="header-view">
    <div id="title"> {props.title} </div>
    <div id="exit" onClick={props.exit}> <i className="fas fa-times" /> </div>
  </div>
);

const HeaderView = connect(
  (state) => ({
    title: state.viewNote.note.title
  }),
  (dispatch) => ({
    exit: () => dispatch(exitView())
  })
)(HeaderViewPresent);

export default HeaderView;