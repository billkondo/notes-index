import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Footer from './Footer';
import Modal from '../../Modal/Modal';

import { exitEdit, enterMenu } from '../../../actions/notes-router';
import { resetNote } from '../../../actions/notes-operations';
import { endModal } from '../../../actions/modal';
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

  render() {
    const { render, transitionEditToMenu } = this.props;

    return (
      <CSSTransition
        in={render}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          enter: 800,
          exit: 500
        }}
        classNames={{
          enter: "animated",
          enterActive: "fadeIn fast",
          exit: "animated",
          exitActive: "fadeOut faster"
        }}
      >
        <div className="notes-edit-page">
          <div className="notes-edit">
            <Header exitFunction={transitionEditToMenu} />
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

export default connect(
  (state) => ({
    render: state.notesRouter.renderEdit,
    note: state.notesOperations
  }),
  (dispatch) => ({
    transitionEditToMenu: () => {
      dispatch(exitEdit());
      setTimeout(() => {
        dispatch(enterMenu());
        dispatch(resetNote());
        dispatch(endModal());
      }, 500);
    },
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    deleteNote: (id) => dispatch(deleteNote(id))
  })
)(Edit);