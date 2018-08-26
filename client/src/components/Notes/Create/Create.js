import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import uuidv4 from 'uuid/v4';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Modal from '../../Modal/Modal';

import { CSSTransition } from 'react-transition-group';

import { addNote } from '../../../actions/notes-data';
import { resetNote } from '../../../actions/notes-operations';
import { exitCreate, enterMenu } from '../../../actions/notes-routes';
import { exitNotesCreate, enterNotesMenu } from '../../../actions/css-transitions';
import { endModal} from '../../../actions/modal';

class CreateUI extends React.Component {
  state = {
    open: true // Avoid double clicks
  }

  submit = () => {
    if (!this.state.open)
      return;

    this.setState({ open: false });

    let newNote = this.props.note;

    newNote = {
      ...newNote,
      id: uuidv4()
    }

    axios
      .post('/api/notes', newNote)
      .then(() => {
        this.props.addNote(newNote);
        this.props.transitionCreateToMenu();
        setTimeout(() => {
          this.props.reset();
        }, 500);
      })  
      .catch(err => console.log(err))
  }

  render() {
    return (
      <CSSTransition
        in={ this.props.transitionCreate }
        timeout={{
          appear: 800,
          exit: 500
        }}
        appear={true}
        classNames={{
          appear: "animated",
          exit: "animated",
          appearActive: "zoomIn fast", 
          exitActive: "fadeOut faster"
        }}
      >
        <div id="create-page">
          <div id="create-add">
            <Header exitFunction={this.props.transitionCreateToMenu}/>
            <Title />
            <Description />
            <Commentaries />
            <Tags />
            <Button color="success" onClick={this.submit} id="create-button"> Create </Button>

            <Modal />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

const Create = connect(
  (state) => ({
    note: state.notesOperations,
    transitionCreate: state.cssTransitions.notesCreate
  }),
  (dispatch) => ({
    transitionCreateToMenu: () => {
      dispatch(exitNotesCreate());
      dispatch(endModal());

      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitCreate());
        dispatch(enterMenu());
        dispatch(resetNote());
      }, 500);
    },
    reset: () => dispatch(resetNote()),
    addNote: (note) => dispatch(addNote(note))
  })
)(CreateUI);

export default Create;