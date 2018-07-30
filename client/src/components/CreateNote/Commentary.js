import React from 'react';

const Commentary = (props) => (
  <div id="commentary">
    <div className="form-group">
      <textarea
        className="form-control comment"
        rows="2"
        value={props.comment}
        onChange={(e) => props.writeComment(e.target.value, props.id)}
      />
    </div>
  </div>
);

export default Commentary;