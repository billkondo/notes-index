import React from 'react';
import { connect } from 'react-redux';
import { enterNewDescription } from '../../actions/create-note';

const DescriptionProject = (props) => (
  <div id="note-description">
    <div id="title"> Description </div>

    <div id="description">
      <div className="form-group">
        <textarea
          className="form-control"
          rows="4"
          id="description-text"
          value={props.description}
          onChange={(e) => props.enterDescription(e.target.value)}
        />
      </div>
    </div>

    <div className="separator">
    </div>
  </div>
);


const Description = connect(
  (state) => ({
    description: state.createNote.description
  }),
  (dispatch) => ({
    enterDescription: (newDescription) => dispatch(enterNewDescription(newDescription))
  })
)(DescriptionProject);

export default Description;