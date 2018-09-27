import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment }) => (
  <div className="comment">
    { comment } 
  </div>
);

const Commentaries = ({ commentaries }) => (
  <div className="notes-commentaries-view">
    <div className="header">
      <i className="fas fa-book-open icon" />
      Commentaries
    </div>

    <div className="commentaries">
      {
        commentaries.map(value => <Comment key={value.id} comment={value.comment} />)
      }
    </div>
  </div>
);

export default connect(
  (state) => ({
    commentaries: state.notesOperations.commentaries
  })
)(Commentaries);