import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import propTypes from 'prop-types';
import { parseContent } from '../../Editor/EditorCustom';

import { enterView, enterEdit } from '../../../actions/notes-menu';
import { viewNoteLoad } from '../../../actions/view-note';
import { loadNoteOnEditMode } from '../../../actions/edit-note';

class NoteCardUI extends React.Component {
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
          <Editor editorState={EditorState.createWithContent(parseContent(this.props.note.description))} readOnly={true}/>
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
      resolve(dispatch(loadNoteOnEditMode(note)));
    }),
    toEnterView: () => dispatch(enterView()),
    toEnterEdit: () => dispatch(enterEdit())
  })
)(NoteCardUI);

export default NoteCard;