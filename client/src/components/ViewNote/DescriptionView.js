import React from 'react';
import { connect } from 'react-redux';

const DescriptionViewPresent = (props) => (
  <div id="description-view">
    {props.description}
  </div>
);

const DescriptionView = connect(
  (state) => ({
    description: state.viewNote.note.description
  })
)(DescriptionViewPresent)

export default DescriptionView;