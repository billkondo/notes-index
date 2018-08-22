import React from 'react';
import { connect } from 'react-redux';
import Commentary from './Commentary';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AddButton from '../../Buttons/AddButton';

import {
  addComment,
  writeComment,
  deleteComment
} from '../../../actions/notes-operations';

class CommentariesUI extends React.Component {
  render() {
    return (
      <div id="commentaries-note">
        <div id="commentaries-header">
          <div id="commentaries-header-title">Commentaries</div>
          <AddButton click={this.props.addComment} />
        </div>

        <TransitionGroup id="commentaries-box">
          {
            this.props.commentaries.map(value => {
              const comment = JSON.parse(value);

              return (
                <CSSTransition
                  key={comment.id}
                  timeout={500}
                  classNames={{
                    enter: "animated", 
                    enterActive: "zoomIn faster",
                    exit: "animated", 
                    exitActive: "zoomOut faster"
                  }}
                >
                  <Commentary
                    key={comment.id}
                    contentState={comment.contentState}
                    id={comment.id}
                    writeComment={this.props.writeComment}
                    deleteComment={this.props.deleteComment}
                  />
                </CSSTransition>
              );
            })
          }
        </TransitionGroup>
      </div>
    );
  }
}

const Commentaries = connect(
  (state) => ({
    commentaries: state.notesOperations.commentaries
  }),
  (dispatch) => ({
    addComment: () => dispatch(addComment()),
    writeComment: (newComment, id) => dispatch(writeComment(newComment, id)),
    deleteComment: (index) => dispatch(deleteComment(index))
  })
)(CommentariesUI)

export default Commentaries;