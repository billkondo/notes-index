import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

const CommentariesUI = ({ commentaries }) => (
  <div id="commentaries-view">
    {
      commentaries.map((value, index) => {
        return (
          <Comment comment={value} key={index} />
        );
      })
    }
  </div>
);

const Commentaries = connect(
  (state) => ({
    commentaries: state.notesOperations.commentaries
  })
)(CommentariesUI);

export default Commentaries;