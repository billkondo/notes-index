import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

const Header= ({ title }) => (
  <div id="header-view">
    <div id="title-box">
      <div id="title-icon"><i className="fas fa-quote-left" /></div>
      <div id="title"> {title} </div>
    </div>
    <ExitButton to='/Notes' />
  </div>
);

Header.propTypes = {
  title: propTypes.string
}

export default connect(
  (state) => ({
    title: state.notesOperations.title
  })
)(Header);