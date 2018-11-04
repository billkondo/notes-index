import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import EditUI from './EditUI';

import { loadNote, resetNote } from '../../../actions/notes-operations';

class Edit extends React.Component {
  state = {
    loaded: false
  }
  
  componentWillMount() {
    const id = this.props.match.params.id;  
    const { loadNote } = this.props;

    axios
      .get(`/api/notes/${id}`)
      .then(res => {
        loadNote(res.data);
        this.setState({ loaded: true });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote, searchNotesUnload } = this.props;
    resetNote();
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;

    return (
      <EditUI />
    );
  }
}

export default connect(
  (state) => ({
    note: state.notesOperations,
  }),
  { loadNote, resetNote }
)(Edit);