import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ViewFront from './ViewFront';
import ViewBack from './ViewBack';

import { loadNote, resetNote } from '../../../actions/notes-operations';

class View extends React.Component {
  state = {
    flipped: false,
    loaded: false
  }

  flipSide = () => this.setState((prevState) => ({ flipped: !prevState.flipped }));
  finishLoading = () => this.setState({ loaded: true });

  componentWillMount() {
    const id = this.props.match.params.id;
    const { loadNote } = this.props;

    axios
      .get(`/api/notes/${id}/`)
      .then(res => {
        const note = res.data;
        loadNote(note);
        this.finishLoading();
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote } = this.props;
    resetNote();
  }

  render() {
    const { flipped, loaded } = this.state;

    return (
      <div className="view-page">
        { !flipped && loaded && <ViewFront flipSide={this.flipSide} /> }
        {  flipped && loaded &&  <ViewBack flipSide={this.flipSide} /> }
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
