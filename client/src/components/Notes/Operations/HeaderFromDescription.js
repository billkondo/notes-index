import React from 'react';
import propTypes from 'prop-types';

const HeaderFromDescription = ({ onBoldClick, onItalicClick, isBold, isItalic }) => {
  const getStyle = (flag) => {
    if (!flag)
      return {}

    return {
      background: "#353839",
      color: "white"
    }
  }

  return (
    <div className="header-description-note">
      <div className="header-description-title-box">
        <div className="description-icon"><i className="fas fa-book" /></div>
        <div className="title"> Description </div>
      </div>
      <div className="button-container">
        <i className="fas fa-bold button" onMouseDown={onBoldClick} style={getStyle(isBold)} />
        <i className="fas fa-italic button" onMouseDown={onItalicClick} style={getStyle(isItalic)} />
      </div>
    </div>
  );
}

HeaderFromDescription.propTypes = {
  isBold: propTypes.bool, 
  isItalic: propTypes.bool, 
  onBoldClick: propTypes.func, 
  onItalicClick: propTypes.func
}

export default HeaderFromDescription;