import React from 'react';
import { connect } from 'react-redux';

const DescriptionUI = ({ description }) => (
  <div id="description-view">
    <div id="description-title-box">
      <div id="description-icon"> <i className="fas fa-book" /> </div>
      <div id="description-title"> Description </div>
    </div>

    {/* <div id="description-editor">
      <Editor editorState={EditorState.createWithContent(parseContent(description))} readOnly={true} />
    </div> */}
  </div>
);

const Description = connect(
  (state) => ({
    description: state.notesOperations.description
  })
)(DescriptionUI)

export default Description;