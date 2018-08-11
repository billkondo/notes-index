import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import { parseContent } from '../Editor/EditorCustom';

const DescriptionViewUI = ({ description }) => (
  <div id="description-view">
    <Editor editorState={EditorState.createWithContent(parseContent(description))} readOnly={true} />
  </div>
);

const DescriptionView = connect(
  (state) => ({
    description: state.viewNote.note.description
  })
)(DescriptionViewUI)

export default DescriptionView;