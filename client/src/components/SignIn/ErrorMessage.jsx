import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { bool, string } from 'prop-types';

const ErrorMessage = ({ message, shouldRender }) => (
  <CSSTransition
    in={shouldRender}
    timeout={800}
    classNames={{
      enter: 'animated',
      exit: 'animated',
      enterActive: 'fadeInUp fast',
      exitActive: 'fadeOutDown fast'
    }}
    mountOnEnter
    unmountOnExit
  >
    <div className="error-message-container">
      <div className="error-message">
        <p>{message}</p>
      </div>
    </div>
  </CSSTransition>
);

ErrorMessage.propTypes = {
  message: string.isRequired,
  shouldRender: bool.isRequired
};

export default ErrorMessage;
