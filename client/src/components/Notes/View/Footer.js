import React from 'react';
import propTypes from 'prop-types';

const Footer = ({ flipSide }) => (
  <div className="footer-view">
    <div className="flip-button" onClick={flipSide}> <i className="fas fa-undo" /> </div>
  </div>
);

Footer.propTypes = {
  flipSide: propTypes.func.isRequired
}

export default Footer;