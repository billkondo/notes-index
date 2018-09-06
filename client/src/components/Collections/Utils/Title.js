import React from 'react';
import propTypes from 'prop-types';

const Title = ({ title, onChange }) => (
  <div className="collections-utils-title">
    <div className="header">
      Title
    </div>

    <input className="title" onChange={onChange} value={title} >
      {title}
    </input>
  </div>
);

Title.propTypes = {
  title: propTypes.string.isRequired,
  onChange: propTypes.string.isRequired
}

export default Title;
