import React from 'react';
import { connect } from 'react-redux';
import Commentary from './Commentary';

import {
  addNewComment,
  writeNewComment
} from '../../actions/create-note';

const CommentariesPresent = (props) => (
  <div id="commentaries">
    <div id="commentaries-header">
      <div id="commentaries-header-title">Commentaries</div>
      <div id="commentaries-add" onClick={props.addComment} > <i className="fas fa-plus" /> </div>
    </div>

    <div id="commentaries-box">
      {
        props.commentaries.map((value, index) => {
          return (
            <Commentary key={index} comment={value} id={index} writeComment={props.writeComment} />
          );
        })
      }
    </div>

    <div className="separator">
    </div>

  </div>
);

const Commentaries = connect(
  (state) => ({
    commentaries: state.createNote.commentaries
  }),
  (dispatch) => ({
    addComment: () => dispatch(addNewComment()),
    writeComment: (newComment, id) => dispatch(writeNewComment(newComment, id))
  })
)(CommentariesPresent)

export default Commentaries;