import React from 'react';
import propTypes from 'prop-types';

import Fade from '../High_Order/Fade';

const ExitButton = ({ click, styles }) => (
  <button className="exit-button" onClick={click} style={styles} ><i className="fas fa-times exit-icon" /></button>
);

ExitButton.propTypes = {
  click: propTypes.func.isRequired
}

export default Fade(ExitButton);