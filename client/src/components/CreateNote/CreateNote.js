import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { stringifyContent } from '../Editor/EditorCustom';

import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

import {
  closeCreateNote,
  addNote
} from '../../actions/notes-menu';

import {
  resetNote
} from '../../actions/create-note';

class NotePresent extends React.Component {
  state = {
    open: true // Avoid double clicks
  }

  submit = () => {
    if (!this.state.open)
      return;

    this.setState({ open: false });

    console.log(this.props);

    const newNote = {
      title: this.props.note.title,
      description: stringifyContent(this.props.note.description.getCurrentContent()),  
      commentaries: this.props.note.commentaries, 
      tags: this.props.note.tags
    }

    axios
      .post('/api/notes', newNote)
      .then(() => {
        this.props.add(newNote)
        this.props.close();
        this.props.reset();
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="create-note-add-page">
        <div id="create-note-add">
          <Header />
          <Title />
          <Description />
          <Commentaries />
          <Tags />
          <Button color="success" onClick={this.submit} id="create-button"> Create </Button>

        </div>
      </div>
    );
  }
}

const Note = connect(
  (state) => ({
    note: state.createNote
  }),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote()),
    reset: () => dispatch(resetNote()),
    add: (note) => dispatch(addNote(note))
  })
)(NotePresent);

export default Note;