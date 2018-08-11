import React from 'react';
import { connect } from 'react-redux';
import CommentView from './CommentView';

const CommentViewUI = ({ commentaries }) => (
  <div id="commentaries-view">
    {
      commentaries.map((value, index) => {
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
)(CommentViewUI);

export default CommentariesView;