import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ViewFront from './ViewFront';
import ViewBack from './ViewBack';

import { loadNote, resetNote } from '../../../actions/notes-operations';

class View extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => this.setState((prevState) => ({ flipped: !prevState.flipped }));

  componentWillUnmount() {
    const { resetNote } = this.props;
    resetNote();
  }

  render() {
    const { flipped } = this.state;

    return (
      <div className="view-page">
        <ViewFront flipSide={this.flipSide} flipped={!flipped} />
        <ViewBack flipSide={this.flipSide} flipped={flipped} />
      </div>
    );
  }
}

View.propTypes = {
  loadNote: propTypes.func.isRequired, 
  resetNote: propTypes.func.isRequired
}

export default connect(
  null, 
  { loadNote, resetNote }
)(View);
