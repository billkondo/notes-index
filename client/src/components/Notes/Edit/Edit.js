import React from 'react';
import { connect } from 'react-redux';

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

class EditUI extends React.Component {
  finishEdit = () => {

  }

  deleteNote = () => {
    console.log(this.props);
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
          appearActive: "zoomIn fast",
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
            <Footer finishEdit={this.finishEdit} deleteNote={this.deleteNote}/>

            <Modal />
          </div>
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
      dispatch(endModal());

      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitEdit());
        dispatch(enterMenu());
        dispatch(resetNote());
      }, 500);
    }
  })
)(EditUI);

export default Edit;