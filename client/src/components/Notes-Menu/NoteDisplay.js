import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import propTypes from 'prop-types';

import { enterView, enterEdit } from '../../actions/notes-menu';
import { viewNoteLoad } from '../../actions/view-note';
import { loadNoteOnEditMode } from '../../actions/edit-note';

class NoteDisplayUI extends React.Component {
  state = {
    editState: EditorState.createEmpty()
  }

  static propsTypes = {
    note: propTypes.object.isRequired
  }

  prepareToEnterViewNote = () => {
    this.props
      .loadView(this.props.note)
      .then(() => this.props.toEnterView())
  }

  prepareToEnterEditNote = () => {
    this.props
      .loadEdit(this.props.note)
      .then(() => this.props.toEnterEdit())
  }

  onClick = () => this.setState({ editorState });

  render() {
    console.log(this.props.note.description);

    return (
      <div className="note-display">
        <div className="note-display-header">
          <div className="note-display-title"> {this.props.note.title} </div>
          <div className="controls">
            <div className="edit" onClick={this.prepareToEnterEditNote}> <i className="fas fa-edit" /> </div>
            <div className="view" onClick={this.prepareToEnterViewNote}> <i className="fas fa-eye" /> </div>
          </div>
        </div>

        <div className="description">
          <Editor editorState={this.state.editState} />
        </div>
      </div>
    );
  }
}

const NoteDisplay = connect(
  (state) => ({}),
  (dispatch) => ({
    loadView: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(viewNoteLoad(note)));
    }),
    loadEdit: (note) => new Promise((resolve, reject) => {
      resolve(dispatch(loadNoteOnEditMode(note)));
    }),
    toEnterView: () => dispatch(enterView()),
    toEnterEdit: () => dispatch(enterEdit())
  })
)(NoteDisplayUI);

export default NoteDisplay;