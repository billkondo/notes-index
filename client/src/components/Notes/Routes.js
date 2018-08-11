import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Create from './Create/Create';
import ViewFront from './View/ViewFront';
import Edit from './Edit/Edit';
import Menu from './Main/Menu';

import {
  loadMenuNotes
} from '../../actions/notes-menu';

class NotesMenuUI extends React.Component {
  componentDidMount() {
    axios
      .get('/api/notes')
      .then(res => this.props.load(res.data))
      .catch(err => console.log(err));
  }

  renderPage = () => {
    if (this.props.createNote) return <Create />
    if (this.props.viewNote) return <ViewFront />
    if (this.props.editNote) return <Edit />
    return <Menu />
  }

  render() {
    return (
      <div id="notes-menu" className={`myFade myFade-${status}`}>
        {this.renderPage()}
      </div>
    );
  }
}

const NotesMenu = connect(
  (state) => ({
    createNote: state.notesMenu.createNote,
    notes: state.notesMenu.notes,
    viewNote: state.notesMenu.viewNote,
    editNote: state.notesMenu.editNote
  }),
  (dispatch) => ({
    load: (notes) => dispatch(loadMenuNotes(notes))
  })
)(NotesMenuUI)

export default NotesMenu;