import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import propTypes from 'prop-types';

import { writeDescription } from '../../../actions/notes-operations';

const Description = ({ description, writeDescription }) => (
  <div className="notes-utils-description">
    <div className="header">
      <i className="fas fa-book" />
      Description
    </div>

    <div className="description">
      <InputGroup>
        <Input 
          type="textarea" 
          rows="3" 
          value={description} 
          onChange={e => writeDescription(e.target.value)}
        />
      </InputGroup>
    </div>
  </div>
);

Description.propTypes = {
  description: propTypes.string.isRequired, 
  writeDescription: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    description: state.notesOperations.description
  }),
  { writeDescription }
)(Description);