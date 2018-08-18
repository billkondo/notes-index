import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import propTypes from 'prop-types';
import { parseContent } from '../../Editor/EditorCustom';

import { enterEdit, enterView, exitMenu } from '../../../actions/notes-routes';
import { exitNotesMenu, enterNotesView, enterNotesEdit } from '../../../actions/css-transitions';

import { viewNoteLoad } from '../../../actions/view-note';
import { loadNote } from '../../../actions/notes-operations';

class NoteCardUI extends React.Component {
  static propsTypes = {
    note: propTypes.object.isRequired
  }

  prepareToEnterViewNote = () => {
    this.props
      .loadView(this.props.note)
      .then(() => this.props.transitionMenuToView())
  }

  prepareToEnterEditNote = () => {
    this.props
      .loadEdit(this.props.note)
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
    loadView: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(viewNoteLoad(note)));
    }),
    loadEdit: (note) => new Promise((resolve, reject) => {
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