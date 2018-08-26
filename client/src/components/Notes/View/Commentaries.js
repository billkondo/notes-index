import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

const CommentariesUI = ({ commentaries }) => (
  <div id="commentaries-view">
    <div id="commentaries-title">
      <div id="commentaries-icon"><i className="fas fa-book-open" /></div>
      <div id="commentaries-text">Commentaries</div>
    </div>

    <div id="commentaries-container">
      {
        commentaries.map(value => {
          return (
            <Comment comment={JSON.parse(value).contentState} key={JSON.parse(value).id} />
          );
        })
      }
    </div>
  </div>
);

const Commentaries = connect(
  (state) => ({
    commentaries: state.notesOperations.commentaries
  })
)(CommentariesUI);

export default Commentaries;