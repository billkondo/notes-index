import React from 'react';
import { func, object } from 'prop-types';

import Fade from '../High_Order/Fade';

const ExitButton = ({ click, styles }) => (
  <button type="button" className="exit-button" onClick={click} style={styles}>
    <i className="fas fa-times exit-icon" />
  </button>
);

ExitButton.propTypes = {
  click: func.isRequired,
  styles: object.isRequired
};

export default Fade(ExitButton);
