import React from 'react';
import propTypes from 'prop-types';

class AddButton extends React.Component {
  static propTypes = {
    click: propTypes.func.isRequired
  }

  render() {
    return (
      <div className="add-button" onClick={this.props.click}>
        <i className="fas fa-plus plus" />
      </div>
    );
  }
}

export default AddButton;