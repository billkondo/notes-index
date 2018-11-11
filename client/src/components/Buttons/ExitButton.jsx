import React from 'react';
import { func, shape } from 'prop-types';

import Fade from '../High_Order/Fade';

const ExitButton = ({ click, styles }) => (
  <button type="button" className="exit-button" onClick={click} style={styles}>
    <i className="fas fa-times exit-icon" />
  </button>
);

ExitButton.propTypes = {
  click: func.isRequired,
  styles: shape({})
};

ExitButton.defaultProps = {
  styles: null
};

export default Fade(ExitButton);
