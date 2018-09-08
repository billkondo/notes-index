import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { parseContent } from '../../Editor/CustomEditor';

import { enterEdit, enterView, exitMenu } from '../../../actions/notes-router';
import { loadNote } from '../../../actions/notes-operations';

class NoteCard extends React.Component {
  state = {
    didClick: false
  }

  prepareToEnterViewNote = () => {
    if (this.state.didClick) 
      return;

    this.setState({ didClick: true });

    this.props
      .loadNote(this.props.note)
      .then(() => this.props.transitionMenuToView())
  }

  prepareToEnterEditNote = () => {
    if (this.state.didClick)
      return;

    this.setState({ didClick: true });

    this.props
      .loadNote(this.props.note)
      .then(() => this.props.transitionMenuToEdit())
  }

  onClick = () => this.setState({ editorState });

  render() {
    const { note } = this.props;

    return (
      <div className="note-card">
        <div className="note-display-header">
          <div className="note-display-title"> {note.title} </div>
          <div className="controls">
            <Link className="edit" to={`/Notes/Edit/${note.id}`}> <i className="fas fa-edit" /> </Link>
            <Link className="view" to={`/Notes/View/${note.id}`}> <i className="fas fa-eye" /> </Link>
          </div>
        </div>

        <div className="description">
          <Editor editorState={EditorState.createWithContent(parseContent(note.description))} readOnly={true} />
        </div>
      </div>
    );
  }
}

NoteCard.propTypes = {
  note: propTypes.object.isRequired
}

export default connect(
  null,
  (dispatch) => ({
    loadNote: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(loadNote(note)));
    }),
    transitionMenuToView: () => {
      dispatch(exitMenu());
      setTimeout(() => dispatch(enterView()), 500);
    },
    transitionMenuToEdit: () => {
      dispatch(exitMenu());
      setTimeout(() => dispatch(enterEdit()), 500);
    }
  })
)(NoteCard);