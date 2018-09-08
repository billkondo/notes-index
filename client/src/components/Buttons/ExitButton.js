import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Exit = (to, click) => {
  if (to)
    return (
      <Link className="exit-button" to={to}>
        <i className="fas fa-times" />
      </Link>
    );

  return (
    <div className="exit-button" onMouseDown={click}>
      <i className="fas fa-times" />
    </div>
  );
}

const ExitButton = ({ to, click }) => (
  <CSSTransition
    in={true}
    timeout={800}
    appear={true}
    classNames={{
      appear: "animated", 
      appearActive: "fadeIn fast"
    }}
  >
    { Exit(to, click) }
  </CSSTransition>
);

ExitButton.propTypes = {
  to: propTypes.string, 
  click: propTypes.func
}

export default ExitButton;