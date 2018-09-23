import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import propTypes from 'prop-types';

import { writeTitle } from '../../../actions/collections-operations';

const Title = ({ title, writeTitle }) => (
  <div className="collections-utils-title">
    <div className="header"> 
      <i className="fas fa-quote-left" />
      <span>Title</span>
    </div>

    <InputGroup>
      <Input type="text" className="title" onChange={e => writeTitle(e.target.value)} value={title} />
    </InputGroup>
  </div>
);

Title.propTypes = {
  title: propTypes.string.isRequired,
  writeTitle: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    title: state.collectionsOperations.title
  }),
  { writeTitle }
)(Title);
