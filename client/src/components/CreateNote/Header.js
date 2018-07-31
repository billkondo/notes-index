import React from 'react';
import { connect } from 'react-redux';

import {
  closeCreateNote
} from '../../actions/notes-menu';

const HeaderPresent = (props) => (
  <div id="header">
    <div id="header-title"> Create Note </div>

    <div id="exit" onClick={props.close}>
      <i className="fas fa-times" />
    </div>
  </div>
);

const Header = connect(
  (state) => ({}),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote())
  })
)(HeaderPresent);


export default Header;