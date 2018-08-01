import React from 'react';

class Commentary extends React.Component {
  render() {
    return (
      <div className="commentary">
        <div className="form-group">
          <textarea
            className="form-control comment"
            rows="3"
            value={this.props.comment}
            onChange={(e) => this.props.write(e.target.value, this.props.index)}
          />
        </div>

        <i 
          className="far fa-times-circle exit" 
          onClick={() => this.props.delete(this.props.index)}
        />
      </div>
    );
  }
}

export default Commentary;