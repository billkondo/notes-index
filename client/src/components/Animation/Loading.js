import React from 'react';

import Fade from '../High_Order/Fade';

const Loading = ({ position, icon }) => (
  <div className="LoadingContainer" style={position} >
    <div className="loading-icon" > <i className={`fas fa-spinner ${icon}`}/> </div>
  </div>
);  

export default Fade(Loading);