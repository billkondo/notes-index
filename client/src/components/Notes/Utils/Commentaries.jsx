import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { func, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import AddButton from '../../Buttons/AddButton';

import { addComment, writeComment, deleteComment } from '../../../actions/notes-operations';

import { commentsArray } from '../../../propTypes/propTypes';

class Comment extends React.Component {
  state = {
    focus: false
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.loseFocus, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.loseFocus, false);
  }

  loseFocus = e => {
    if (!this.node.contains(e.target)) this.setState({ focus: false });
  };

  render() {
    const { comment, writeCommentConnect, deleteCommentConnect, id } = this.props;
    const { focus } = this.state;

    return (
      <div
        className="comment"
        ref={node => {
          this.node = node;
        }}
      >
        <InputGroup>
          <Input
            onFocus={() => this.setState({ focus: true })}
            type="textarea"
            rows="2"
            value={comment}
            onChange={e => writeCommentConnect(e.target.value, id)}
          />
        </InputGroup>

        {focus && <ExitButton click={deleteCommentConnect} />}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: string.isRequired,
  writeCommentConnect: func.isRequired,
  deleteCommentConnect: func.isRequired,
  id: string.isRequired
};

const Commentaries = ({
  addCommentConnect,
  writeCommentConnect,
  deleteCommentConnect,
  commentaries
}) => (
  <div className="notes-utils-commentaries">
    <div className="header">
      <div className="title">
        <i className="fas fa-book-open" />
        Commentaries
      </div>

      <AddButton click={addCommentConnect} />
    </div>

    <TransitionGroup className="container-comment">
      {commentaries.map(value => (
        <CSSTransition
          key={value.id}
          timeout={500}
          classNames={{
            enter: 'animated',
            enterActive: 'zoomIn faster'
          }}
          exit={false}
        >
          <Comment
            key={value.id}
            id={value.id}
            comment={value.comment}
            writeCommentConnect={writeCommentConnect}
            deleteCommentConnect={() => deleteCommentConnect(value.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

Commentaries.propTypes = {
  commentaries: commentsArray.isRequired,
  addCommentConnect: func.isRequired,
  writeCommentConnect: func.isRequired,
  deleteCommentConnect: func.isRequired
};

export default connect(
  state => ({
    commentaries: state.notesOperations.commentaries
  }),
  {
    addCommentConnect: addComment,
    writeCommentConnect: writeComment,
    deleteCommentConnect: deleteComment
  }
)(Commentaries);
