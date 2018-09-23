import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default (Component) => {
  return class extends React.Component {
    render() {
      return (
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames={{
            appear: "animated", 
            appearActive: "fadeIn fast"
          }}
        >
          <Component {...this.props} />
        </CSSTransition>
      );
    }
  }
}