import React from 'react';

class Commentary extends React.Component {
  render() {
    return (
      <div id="commentary">
        <div className="form-group">
          <textarea
            className="form-control comment"
            rows="2"
            value={this.props.comment}
            onChange={(e) => this.props.writeComment(e, this.props.id)}
          />
        </div>
      </div>
    );
  }
}

export default Commentary;