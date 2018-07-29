import React from 'react';

class Commentary extends React.Component {
  render() {
    return (
      <div id="commentary">
        <div class="form-group">
          <textarea class="form-control comment" rows="2"></textarea>
        </div>
      </div>
    );
  }
}

export default Commentary;