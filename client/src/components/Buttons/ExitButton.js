import React from 'react';
import propTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

class ExitButton extends React.Component {
  static propTypes = {
    click: propTypes.func.isRequired
  }

  render() {
    return (
      <CSSTransition
        in={true}
        timeout={800}
        appear={true}
        classNames={{
          appear: "animated", 
          appearActive: "fadeIn fast"
        }}
      >
        <div className="exit-button" onClick={this.props.click} >
          <i className="fas fa-times" />
        </div>
      </CSSTransition>
    );
  }
}

export default ExitButton;