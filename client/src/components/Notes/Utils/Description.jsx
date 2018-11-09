import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import { string, func } from 'prop-types';

import { writeDescription } from '../../../actions/notes-operations';

const Description = ({ description, writeDescription: write }) => (
  <div className="notes-utils-description">
    <div className="header">
      <i className="fas fa-book" />
      <span>Description</span>
    </div>

    <div className="description">
      <InputGroup>
        <Input type="textarea" rows="3" value={description} onChange={e => write(e.target.value)} />
      </InputGroup>
    </div>
  </div>
);

Description.propTypes = {
  description: string.isRequired,
  writeDescription: func.isRequired
};

export default connect(
  state => ({
    description: state.notesOperations.description
  }),
  { writeDescription }
)(Description);
