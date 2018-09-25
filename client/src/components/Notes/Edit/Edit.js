import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import EditUI from './EditUI';

import { loadNote, resetNote } from '../../../actions/notes-operations';
import { updateNote, deleteNote } from '../../../actions/notes-data';

class Edit extends React.Component {
  state = {
    loaded: false
  }

  finishLoading = () => this.setState({ loaded: true })

  finishEdit = () => {
    axios
      .put('/api/notes', this.props.note)
      .then(() => {
        const id = this.props.note.id;
        this.props.updateNote(id, this.props.note);
        this.props.transitionEditToMenu();
      })
      .catch(err => console.log(err));
  }

  deleteNote = () => {
    const id = this.props.note.id;
    axios
      .delete('/api/notes', {data: { "id": id }})
      .then(() => {
        this.props.deleteNote(id);
        this.props.transitionEditToMenu();
      })
      .catch(err => console.log(err));
  }
  
  componentWillMount() {
    const id = this.props.match.params.id;  
    const { loadNote } = this.props;

    axios
      .get(`/api/notes/${id}`)
      .then(res => {
        loadNote(res.data);
        this.finishLoading();
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote } = this.props;
    resetNote();
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return <div></div>

    return (
      <EditUI />
    );
  }
}

export default connect(
  (state) => ({
    note: state.notesOperations,
  }),
  { updateNote, deleteNote, loadNote, resetNote }
)(Edit);