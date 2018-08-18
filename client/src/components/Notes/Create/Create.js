import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { stringifyContent } from '../../Editor/EditorCustom';

import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

import { CSSTransition } from 'react-transition-group';

import { addNote } from '../../../actions/notes-data';
import { resetNote } from '../../../actions/notes-operations';
import { exitCreate, enterMenu } from '../../../actions/notes-routes';
import { exitNotesCreate, enterNotesMenu } from '../../../actions/css-transitions';

class CreateUI extends React.Component {
  state = {
    open: true // Avoid double clicks
  }

  submit = () => {
    if (!this.state.open)
      return;

    this.setState({ open: false });

    const newNote = {
      title: this.props.note.title,
      description: stringifyContent(this.props.note.description.getCurrentContent()),  
      commentaries: this.props.note.commentaries, 
      tags: this.props.note.tags
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
            <Header />
            <Title />
            <Description />
            <Commentaries />
            <Tags />
            <Button color="success" onClick={this.submit} id="create-button"> Create </Button>

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

      setTimeout(() => {
        dispatch(enterNotesMenu());
        dispatch(exitCreate());
        dispatch(enterMenu());
      }, 500);
    },
    reset: () => dispatch(resetNote()),
    addNote: (note) => dispatch(addNote(note))
  })
)(CreateUI);

export default Create;