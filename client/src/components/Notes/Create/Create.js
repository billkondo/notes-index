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

import {
  closeCreateNote,
  addNote
} from '../../../actions/notes-menu';

import {
  resetNote
} from '../../../actions/create-note';

class CreateUI extends React.Component {
  state = {
    open: true, // Avoid double clicks
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
        this.props.add(newNote)
        this.props.close();
        this.props.reset();
      })
      .catch(err => console.log(err))
  }

  exitTransition = () => this.setState({ cssTransition: false })

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
    note: state.createNote,
    transitionCreate: state.cssTransitions.notesCreate
  }),
  (dispatch) => ({
    close: () => dispatch(closeCreateNote()),
    reset: () => dispatch(resetNote()),
    add: (note) => dispatch(addNote(note))
  })
)(CreateUI);

export default Create;