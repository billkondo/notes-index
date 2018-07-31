import React from 'react';
import { connect } from 'react-redux';

const HeaderViewPresent = (props) => (
  <div id="header-view">
    <div id="title"> </div>
    <div id="exit"> <i className="fas fa-times" /> </div>
  </div>
);

const HeaderView = connect(
  (state) => ({
    
  })
)(HeaderViewPresent);

export default HeaderView;