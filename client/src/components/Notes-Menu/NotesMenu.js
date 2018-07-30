import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import CreateNote from '../CreateNote/CreateNote';
import Functions from './Functions';
import UserNotes from './UserNotes';

import {
  loadMenuNotes
} from '../../actions/notes-menu';

class NotesMenuPresent extends React.Component {
  componentDidMount() {
    axios
      .get('/api/notes')
      .then(res => this.props.load(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="notes-menu">
        {this.props.createNote && <CreateNote />}

        <div id="notes-menu-title"> Your Notes </div>
        <Functions />
        <UserNotes notes={this.props.notes} />
      </div>
    );
  }
}

const NotesMenu = connect(
  (state) => ({
    createNote: state.notesMenu.createNote, 
    notes: state.notesMenu.notes
  }),
  (dispatch) => ({
    load: (notes) => dispatch(loadMenuNotes(notes))
  })
)(NotesMenuPresent)

export default NotesMenu;