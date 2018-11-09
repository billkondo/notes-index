import React from 'react';
import { bool, func } from 'prop-types';

const Controls = ({ sideToView, flipView }) => (
  <div className="controls">
    {!sideToView && <i className="fas fa-arrow-right right" onClick={flipView} />}
    {sideToView && <i className="fas fa-arrow-left left" onClick={flipView} />}
  </div>
);

Controls.propTypes = {
  sideToView: bool.isRequired,
  flipView: func.isRequired
};

export default Controls;
