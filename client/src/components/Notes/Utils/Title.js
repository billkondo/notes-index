import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import propTypes from 'prop-types';

import { writeTitle } from '../../../actions/notes-operations';

const Title = ({ title, writeTitle }) => (
  <div className="notes-utils-title">
    <div className="header">
      <i className="fas fa-quote-left" />
      Title
    </div>

    <InputGroup>
      <Input type="text" className="title" value={title} onChange={(e) => writeTitle(e.target.value)} />
    </InputGroup>
  </div>
);

Title.propTypes = {
  title: propTypes.string,
  writeTitle: propTypes.func
}

export default connect(
  (state) => ({
    title: state.notesOperations.title
  }),
  { writeTitle }
)(Title);