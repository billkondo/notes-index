import React from 'react';
import { string, shape } from 'prop-types';

import Fade from '../High_Order/Fade';

const Loading = ({ positionStyle, iconStyle }) => (
  <div className="LoadingContainer" style={positionStyle}>
    <div className="loading-icon">
      <i className={`fas fa-spinner ${iconStyle}`} />
    </div>
  </div>
);

Loading.propTypes = {
  iconStyle: string,
  positionStyle: shape({
    positon: string
  })
};

Loading.defaultProps = {
  positionStyle: {},
  iconStyle: ''
};

export default Fade(Loading);
