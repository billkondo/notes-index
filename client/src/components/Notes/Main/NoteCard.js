import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import propTypes from 'prop-types';
import { parseContent } from '../../Editor/CustomEditor';

import { enterEdit, enterView, exitMenu } from '../../../actions/notes-routes';
import { exitNotesMenu, enterNotesView, enterNotesEdit } from '../../../actions/css-transitions';

import { loadNote } from '../../../actions/notes-operations';

class NoteCardUI extends React.Component {
  static propsTypes = {
    note: propTypes.object.isRequired
  }

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
    return (
      <div className="note-card">
        <div className="note-display-header">
          <div className="note-display-title"> {this.props.note.title} </div>
          <div className="controls">
            <div className="edit" onClick={this.prepareToEnterEditNote}> <i className="fas fa-edit" /> </div>
            <div className="view" onClick={this.prepareToEnterViewNote}> <i className="fas fa-eye" /> </div>
          </div>
        </div>

        <div className="description">
          <Editor editorState={EditorState.createWithContent(parseContent(this.props.note.description))} readOnly={true} />
        </div>
      </div>
    );
  }
}

const NoteCard = connect(
  (state) => ({}),
  (dispatch) => ({
    loadNote: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(loadNote(note)));
    }),
    transitionMenuToView: () => {
      dispatch(exitNotesMenu());

      setTimeout(() => {
        dispatch(enterNotesView());
        dispatch(exitMenu());
        dispatch(enterView());
      }, 500);
    },
    transitionMenuToEdit: () => {
      dispatch(exitNotesMenu());

      setTimeout(() => {
        dispatch(enterNotesEdit());
        dispatch(exitMenu());
        dispatch(enterEdit());
      }, 500);
    }
  })
)(NoteCardUI);

export default NoteCard;