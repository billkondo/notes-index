import React from 'react';
import { connect } from 'react-redux';
import Commentary from './Commentary';

import AddButton from '../../Buttons/AddButton';

import {
  addComment,
  writeComment,
  deleteComment
} from '../../../actions/create-note';

class CommentariesUI extends React.Component {
  render() {
    return (
      <div id="commentaries-create">
        <div id="commentaries-header">
          <div id="commentaries-header-title">Commentaries</div>
          <AddButton click={this.props.addComment} />
        </div>

        <div id="commentaries-box">
          {
            this.props.commentaries.map((value, index) => {
              return (
                <Commentary
                  key={index}
                  commentContentState={value}
                  index={index}
                  writeComment={this.props.writeComment}
                  deleteComment={this.props.deleteComment}
                />
              );
            })
          }
        </div>

        <div className="separator">
        </div>

      </div>
    );
  }
}

const Commentaries = connect(
  (state) => ({
    commentaries: state.createNote.commentaries
  }),
  (dispatch) => ({
    addComment: () => dispatch(addComment()),
    writeComment: (newComment, id) => dispatch(writeComment(newComment, id)),
    deleteComment: (index) => dispatch(deleteComment(index))
  })
)(CommentariesUI)

export default Commentaries;