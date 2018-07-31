import React from 'react';

import { connect } from 'react-redux';
import CommentView from './CommentView';

const CommentViewPresent = (props) => (
  <div id="commentaries-view">
    {
      props.commentaries.map((value, index) => {
        return (
          <CommentView comment={value} key={index} />
        );
      })
    }
  </div>
);

const CommentariesView = connect(
  (state) => ({
    commentaries: state.viewNote.note.commentaries
  })
)(CommentViewPresent);

export default CommentariesView;