import React from 'react';

const CommentView = (props) => (
  <div className="comment-view">
    - {props.comment}
  </div>
);

export default CommentView;