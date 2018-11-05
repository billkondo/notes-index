import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Loading from '../../Animation/Loading';
import EditUI from './EditUI';

import { loadNote, resetNote } from '../../../actions/notes-operations';
import { notesIsLoaded, resetEdit } from '../../../actions/edit';

class Edit extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;  
    const { loadNote, notesIsLoaded, resetEdit } = this.props;

    resetEdit();

    axios
      .get(`/api/notes/${id}`)
      .then(res => {
        loadNote(res.data);
        notesIsLoaded();
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote } = this.props;
    resetNote();
  }

  render() {
    const { isNoteLoaded } = this.props;

    if (!isNoteLoaded) return <Loading />;

    return <EditUI />;
  }
}

export default connect(
  (state) => ({
    isNoteLoaded: state.edit.isNoteLoaded
  }),
  { loadNote, resetNote, notesIsLoaded, resetEdit }
)(Edit);