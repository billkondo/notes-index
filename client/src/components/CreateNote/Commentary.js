import React from 'react';

class Commentary extends React.Component {
  render() {
    return (
      <div className="commentary">
        <textarea
          className="form-control comment"
          rows="3"
          value={this.props.comment}
          onChange={(e) => this.props.write(e.target.value, this.props.index)}
        />

        <div className="exit">
          <i
            className="far fa-times-circle"
            onClick={() => this.props.delete(this.props.index)}
          />
        </div>
      </div>
    );
  }
}

export default Commentary;