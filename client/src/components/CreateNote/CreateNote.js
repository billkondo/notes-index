import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';


// Components
import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

// Functions
import {
  closeCreateNote,
  addNote
} from '../../actions/notes-menu';

import {
  resetNote
} from '../../actions/create-note';

class NotePresent extends React.Component {
  state = {
    open: true
  }

  submit = () => {
    if (!this.state.open)
      return;

    this.setState({ open: false });

    axios
      .post('/api/notes', this.props.note)
      .then(() => {
        this.props.add(this.props.note)
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