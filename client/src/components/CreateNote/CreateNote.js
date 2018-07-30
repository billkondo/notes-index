import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

class Note extends React.Component {
  submit = () => {
    console.log(this.state);
    axios
      .post('/api/notes', this.state)
      .then(res => {
        console.log(res);
        this.setState({
          title: "",
          description: "",
          commentaries: [],
          tags: []
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div id="create-note-add-page">
        <div id="create-note-add">
          <Header />
          <Title />
          <Description />
          <Commentaries />
          <Tags />
          <Button color="success" onClick={this.submit}> Create </Button>

        </div>
      </div>
    );
  }
}

export default Note;