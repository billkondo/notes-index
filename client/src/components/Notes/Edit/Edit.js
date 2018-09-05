import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Footer from './Footer';
import Modal from '../../Modal/Modal';

import { CSSTransition } from 'react-transition-group';

import { exitNotesEdit, enterNotesMenu } from '../../../actions/css-transitions';
import { exitEdit, enterMenu } from '../../../actions/notes-routes';
import { resetNote } from '../../../actions/notes-operations';
import { endModal } from '../../../actions/modal';
import { updateNote, deleteNote } from '../../../actions/notes-data';

class EditUI extends React.Component {
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

  render() {
    return (
      <CSSTransition
        in={this.props.cssTransition}
        timeout={{
          appear: 800,
          exit: 500
        }}
        classNames={{
          appear: "animated",
          appearActive: "fadeIn fast",
          exit: "animated",
          exitActive: "fadeOut faster"
        }}
        appear={true}
      >
        <div id="edit-page">
          <div id="edit-note">
            <Header exitFunction={this.props.transitionEditToMenu} />
            <Title />
            <Description />
            <Commentaries />
            <Tags />
            <Footer finishEdit={this.finishEdit} deleteNote={this.deleteNote} />
          </div>

          <Modal />
        </div>
      </CSSTransition>
    );
  }
}

const Edit = connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesEdit,
    note: state.notesOperations
  }),
  (dispatch) => ({
    transitionEditToMenu: () => {
      dispatch(exitNotesEdit());

      setTimeout(() => {
        dispatch(endModal());
        dispatch(enterNotesMenu());
        dispatch(exitEdit());
        dispatch(enterMenu());
        dispatch(resetNote());
      }, 500);
    },
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    deleteNote: (id) => dispatch(deleteNote(id))
  })
)(EditUI);

export default Edit;