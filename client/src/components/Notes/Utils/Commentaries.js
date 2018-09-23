import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ExitButton from '../../Buttons/ExitButton';
import AddButton from '../../Buttons/AddButton';

import { addComment, writeComment, deleteComment } from '../../../actions/notes-operations';

class Comment extends React.Component {
  state = {
    focus: false
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { comment, writeComment, deleteComment, id } = this.props;
    const { focus } = this.state;

    return (
      <div className="comment">
        <InputGroup>
          <Input 
            type="textarea" 
            rows="2" 
            value={comment} 
            onChange={e => writeComment(e.target.value, id)}
            onFocus={this.onFocus} 
            onBlur={this.onBlur}
          />
        </InputGroup>

        {focus && <ExitButton click={deleteComment} /> }
      </div>
    );
  }
}

const Commentaries = ({ addComment, writeComment, deleteComment, commentaries }) => (
  <div className="notes-utils-commentaries">
    <div className="header">
      <div className="title">
        <i className="fas fa-book-open" />
        Commentaries
      </div>

      <AddButton click={addComment} />
    </div>

    <TransitionGroup className="container-comment">
      {
        commentaries.map(value => {
          return (
            <CSSTransition
              key={value.id}
              timeout={500}
              classNames={{
                enter: "animated",
                enterActive: "zoomIn faster"
              }}
              exit={false}
            >
              <Comment
                key={value.id}
                id={value.id}
                comment={value.comment}
                writeComment={writeComment}
                deleteComment={() => deleteComment(value.id)}
              />
            </CSSTransition>
          );
        })
      }
    </TransitionGroup>
  </div>
);

export default connect(
  (state) => ({
    commentaries: state.notesOperations.commentaries
  }),
  { addComment, writeComment, deleteComment }
)(Commentaries);