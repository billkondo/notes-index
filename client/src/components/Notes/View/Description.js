import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const Description = ({ description }) => (
  <div className="notes-view-description">
    <div className="header">
      <div className="icon"> <i className="fas fa-book" /> </div>
      <div className="title"> Description </div>
    </div>

    <div className="editor">
      {description}
    </div>
  </div>
);

Description.propTypes = {
  description: propTypes.string.isRequired
}

export default connect(
  (state) => ({
    description: state.notesOperations.description
  })
)(Description)