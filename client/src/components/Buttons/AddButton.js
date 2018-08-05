import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <div className="add-button" onClick={this.props.click}>
        <i className="fas fa-plus plus" />
      </div>
    );
  }
}

export default AddButton;