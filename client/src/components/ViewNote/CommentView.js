import React from 'react';
import propTypes from 'prop-types';
import { Editor, EditorState } from 'draft-js';
import { parseContent } from '../Editor/EditorCustom';

const CommentView = ({ comment }) => (
  <div className="comment-view">
    <Editor editorState={EditorState.createWithContent(parseContent(comment))} readOnly={true} />
  </div>
);

CommentView.propTypes = {
  comment: propTypes.string.isRequired
}

export default CommentView;