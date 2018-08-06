import React from 'react';

// Components
import ExitButton from '../Buttons/ExitButton';

class Commentary extends React.Component {
  render() {
    return (
      <div className="commentary" >
        <textarea
          className="form-control comment"
          rows="3"
          value={this.props.comment}
          onChange={(e) => this.props.write(e.target.value, this.props.index)}
        />
        
      </div>
    );
  }
}

export default Commentary;