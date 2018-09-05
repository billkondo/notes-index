import React from 'react';
import propTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div className="error-message-container">
    <div className="error-message">
      <p> {message} </p>
    </div>
  </div>
);

ErrorMessage.propTypes = {
  message: propTypes.string.isRequired
}

export default ErrorMessage;