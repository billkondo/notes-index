import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import { parseContent } from '../../Editor/EditorCustom';

const DescriptionUI = ({ description }) => (
  <div id="description-view">
    <Editor editorState={EditorState.createWithContent(parseContent(description))} readOnly={true} />
  </div>
);

const Description = connect(
  (state) => ({
    description: state.notesOperations.description
  })
)(DescriptionUI)

export default Description;