import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import CreateNote from '../CreateNote/CreateNote';
import ViewNote from '../ViewNote/ViewNote';
import Menu from './Menu';

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

  renderPage = () => {
    if (this.props.createNote) return <CreateNote />
    if (this.props.viewNote) return <ViewNote />
    return <Menu />
  }

  render() {
    return (
      <div id="notes-menu">
        {this.renderPage()}
      </div>
    );
  }
}

const NotesMenu = connect(
  (state) => ({
    createNote: state.notesMenu.createNote, 
    notes: state.notesMenu.notes, 
    viewNote: state.notesMenu.viewNote
  }),
  (dispatch) => ({
    load: (notes) => dispatch(loadMenuNotes(notes))
  })
)(NotesMenuPresent)

export default NotesMenu;