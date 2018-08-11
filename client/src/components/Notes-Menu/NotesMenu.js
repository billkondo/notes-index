import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import CreateNote from '../CreateNote/CreateNote';
import ViewNote from '../ViewNote/ViewNote';
import EditNote from '../EditNote/EditNote';
import Menu from './Menu';

import { CSSTransition } from 'react-transition-group';

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
    if (this.props.createNote) return <CreateNote />
    if (this.props.viewNote) return <ViewNote />
    if (this.props.editNote) return <EditNote />
    return <Menu />
  }

  render() {
    return (
      <CSSTransition
        in={true}
        timeout={1000}
        classNames={"myFade"}
      >
        {(status) => (
          <div id="notes-menu" className={`myFade myFade-${status}`}>
            {this.renderPage()}
          </div>
        )}
      </CSSTransition>
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