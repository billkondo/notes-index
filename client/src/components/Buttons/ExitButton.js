import React from 'react';
import propTypes from 'prop-types';

class ExitButton extends React.Component {
  static propTypes = {
    click: propTypes.func.isRequired
  }

  render() {
    return (
      <div className="exit-button" onClick={this.props.click}>
        <i className="fas fa-times" />
      </div>
    );
  }
}

export default ExitButton;