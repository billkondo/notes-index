import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Footer from './Footer';
import Exit from '../../Modal/Exit';

import { CSSTransition } from 'react-transition-group';

import { exitNotesEdit, enterNotesMenu } from '../../../actions/css-transitions';
import { exitEdit, enterMenu } from '../../../actions/notes-routes';
import { resetNote } from '../../../actions/notes-operations';
import { endExitModal } from '../../../actions/modal';

const EditUI = ({ cssTransition, transitionEditToMenu }) => (
  <CSSTransition
    in={cssTransition}
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
        <Header />
        <Title />
        <Description />
        <Commentaries />
        <Tags />
        <Footer />
        <Exit exit={transitionEditToMenu} />
      </div>
    </div>
  </CSSTransition>
);

const Edit = connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesEdit
  }),
  (dispatch) => ({
    transitionEditToMenu: () => {
      dispatch(exitNotesEdit());
      dispatch(endExitModal());

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