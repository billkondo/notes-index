import React from 'react';
import { Button } from 'reactstrap';

import Header from './Header';
import Title from './Title';
import Description from './Description';
import Commentaries from './Commentaries';
import Tags from './Tags';

class Note extends React.Component {
  state = {
    title: "",
    description: "",
    commentaries: [],
    tags: []
  }

  enterTitle = (event) =>
    this.setState({ title: event.target.value });

  enterDescription = (event) =>
    this.setState({ description: event.target.value });

  addTag = (tag) =>
    this.setState((prevState) => {
      return {
        tags: prevState.tags.concat([tag])
      }
    });

  addComment = () => {
    this.setState((prevState) => {
      return ({
        commentaries: prevState.commentaries.concat([""])
      });
    })
  }

  writeComment = (event, id) => {
    const newComment = event.target.value;
    this.setState((prevState) => {
      let array = prevState.commentaries;
      array[id] = newComment;
      return ({
        commentaries: array
      });
    })
  }

  submit = () => {
    
  }

  render() {
    return (
      <div id="note-add-page">
        <div id="note-add">
          <Header />

          <Title title={this.state.title} enterTitle={this.enterTitle} />

          <Description description={this.state.description} enterDescription={this.enterDescription} />

          <Commentaries commentaries={this.state.commentaries} addComment={this.addComment} writeComment={this.writeComment} />

          <Tags addTag={this.addTag} tags={this.state.tags} />

          <Button color="success" onClick={this.submit}> Create </Button>

        </div>
      </div>
    );
  }
}

export default Note;