import React from 'react';
import { bool, func } from 'prop-types';

const Controls = ({ sideToView, flipView }) => (
  <div className="controls">
    {!sideToView && (
      <button type="button" onClick={flipView} className="right reset">
        <i className="fas fa-arrow-right" />
      </button>
    )}
    {sideToView && (
      <button type="button" onClick={flipView} className="left reset">
        <i className="fas fa-arrow-left" />
      </button>
    )}
  </div>
);

Controls.propTypes = {
  sideToView: bool.isRequired,
  flipView: func.isRequired
};

export default Controls;
