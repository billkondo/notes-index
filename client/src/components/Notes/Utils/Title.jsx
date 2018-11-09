import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import { string, func } from 'prop-types';

import { writeTitle } from '../../../actions/notes-operations';

const Title = ({ title, writeTitle: write }) => (
  <div className="notes-utils-title">
    <div className="header">
      <i className="fas fa-quote-left" />
      Title
    </div>

    <InputGroup>
      <Input type="text" className="title" value={title} onChange={e => write(e.target.value)} />
    </InputGroup>
  </div>
);

Title.propTypes = {
  title: string.isRequired,
  writeTitle: func.isRequired
};

export default connect(
  state => ({
    title: state.notesOperations.title
  }),
  { writeTitle }
)(Title);
