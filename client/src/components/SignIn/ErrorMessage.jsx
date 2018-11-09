import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ErrorMessage = ({ message, shouldRender }) => (
  <CSSTransition
    in={shouldRender}
    timeout={800}
    classNames={{
      enter: "animated", 
      exit: "animated", 
      enterActive: "fadeInUp fast",
      exitActive: "fadeOutDown fast"
    }}
    mountOnEnter={true}
    unmountOnExit={true}
  >
    <div className="error-message-container">
      <div className="error-message">
        <p> {message} </p>
      </div>
    </div>
  </CSSTransition>
);

ErrorMessage.propTypes = {
  message: propTypes.string,
  shouldRender: propTypes.bool.isRequired
}

export default ErrorMessage;