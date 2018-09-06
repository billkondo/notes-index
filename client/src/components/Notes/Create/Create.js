import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import uuidv4 from 'uuid/v4';
import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Modal from '../../Modal/Modal';

import { addNote } from '../../../actions/notes-data';
import { resetNote } from '../../../actions/notes-operations';
import { exitCreate, enterMenu } from '../../../actions/notes-router';
import { endModal } from '../../../actions/modal';

class Create extends React.Component {
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
      })  
      .catch(err => console.log(err))
  }

  render() {
    const { render, transitionCreateToMenu } = this.props;

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
          exit: "animated",
          enterActive: "fadeIn fast", 
          exitActive: "fadeOut faster"
        }}
      >
          <div className="notes-create-page">
            <div className="notes-create">
              <Header exitFunction={transitionCreateToMenu} />
              <Title />
              <Description />
              <Commentaries />
              <Tags />
              <Button color="success" onClick={this.submit} className="notes-create-button"> Create </Button>
            </div>

            <Modal />
          </div>
      </CSSTransition>
    );
  }
}

export default connect(
  (state) => ({
    note: state.notesOperations,
    render: state.notesRouter.renderCreate
  }),
  (dispatch) => ({
    addNote: (note) => dispatch(addNote(note)),
    transitionCreateToMenu: () => {
      dispatch(exitCreate());

      setTimeout(() => {
        dispatch(enterMenu());
        dispatch(resetNote());
        dispatch(endModal());
      }, 500);
    }
  })
)(Create);