import React from 'react';

class ExitButton extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="exit-button" onClick={this.props.click}>
        <i className="fas fa-times" />
      </div>
    );
  }
}

export default ExitButton;