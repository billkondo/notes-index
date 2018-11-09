import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default Component => props => (
  <CSSTransition
    in
    appear
    timeout={800}
    classNames={{
      appear: 'animated',
      appearActive: 'fadeIn fast'
    }}
  >
    <Component {...props} />
  </CSSTransition>
);
