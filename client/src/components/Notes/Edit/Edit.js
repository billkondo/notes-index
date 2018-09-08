import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Footer from './Footer';

import { loadNote, resetNote } from '../../../actions/notes-operations';
import { updateNote, deleteNote } from '../../../actions/notes-data';

class Edit extends React.Component {
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
      .then(res => loadNote(res.data))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote } = this.props;
    resetNote();
  }

  render() {
    console.log(this.props);
    return (
      <div className="notes-edit-page">
        <div className="notes-edit">
          <Header />
          <Title />
          <Description />
          <Commentaries />
          <Tags />
          <Footer finishEdit={this.finishEdit} deleteNote={this.deleteNote} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    note: state.notesOperations
  }),
  { updateNote, deleteNote, loadNote, resetNote }
)(Edit);