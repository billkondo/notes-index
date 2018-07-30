import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

import {
  closeCreateNote,
  loadMenuNotes
} from '../../actions/notes-menu';

import {
  resetNote
} from '../../actions/create-note';

class NotePresent extends React.Component {
  submit = () => {
    axios
      .post('/api/notes', this.props.note)
      .then(res => {
        axios.get('/api/notes').
          then(newRes => {
            this.props.load(newRes.data);
            this.props.close();
            this.props.reset();
          })
          .catch(err => console.log(err))
      })
      .catch(err => {
        console.log(err);
      })
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
          <Button color="success" onClick={this.submit}> Create </Button>

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
    load: (notes) => dispatch(loadMenuNotes(notes))
  })
)(NotePresent);

export default Note;