import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import CreateNote from '../CreateNote/CreateNote';
import Functions from './Functions';
import UserNotes from './UserNotes';

class NotesMenuPresent extends React.Component {
  state = {
    notes: []
  }

  componentDidMount() {
    axios
      .get('/api/notes')
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="notes-menu">
        {this.props.createNote && <CreateNote /> }
        <div id="notes-menu-title"> Your Notes </div>

        <Functions />

        <UserNotes notes={this.state.notes} />
      </div>
    );
  }
}

const NotesMenu = connect(
  (state) => ({
    createNote: state.notesMenu.createNote
  }), 
  (dispatch) => ({

  })
)(NotesMenuPresent)

export default NotesMenu;