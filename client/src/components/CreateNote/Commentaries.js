import React from 'react';
import { connect } from 'react-redux';
import Commentary from './Commentary';

import {
  addComment,
  writeComment,
  deleteComment
} from '../../actions/create-note';

class CommentariesPresent extends React.Component {
  render() {
    return (
      <div id="commentaries">
        <div id="commentaries-header">
          <div id="commentaries-header-title">Commentaries</div>
          <div id="commentaries-add" onClick={this.props.add} > <i className="fas fa-plus" /> </div>
        </div>

        <div id="commentaries-box">
          {
            this.props.commentaries.map((value, index) => {
              return (
                <Commentary
                  key={index}
                  comment={value}
                  index={index}
                  write={this.props.write}
                  delete={this.props.delete}
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
    add: () => dispatch(addComment()),
    write: (newComment, id) => dispatch(writeComment(newComment, id)),
    delete: (index) => dispatch(deleteComment(index))
  })
)(CommentariesPresent)

export default Commentaries;