import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import { func, string } from 'prop-types';

import { writeTitle } from '../../../actions/collections-operations';

const Title = ({ title, writeTitle: write }) => (
  <div className="collections-utils-title">
    <div className="header">
      <i className="fas fa-quote-left" />
      <span>Title</span>
    </div>

    <InputGroup>
      <Input type="text" className="title" onChange={e => write(e.target.value)} value={title} />
    </InputGroup>
  </div>
);

Title.propTypes = {
  title: string.isRequired,
  writeTitle: func.isRequired
};

export default connect(
  state => ({
    title: state.collectionsOperations.title
  }),
  { writeTitle }
)(Title);
