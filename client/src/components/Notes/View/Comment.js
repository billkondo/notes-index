import React from 'react';
import propTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="comment-view">
    {/* <Editor editorState={EditorState.createWithContent(parseContent(comment))} readOnly={true} /> */}
  </div>
);

Comment.propTypes = {
  comment: propTypes.string.isRequired
}

export default Comment;