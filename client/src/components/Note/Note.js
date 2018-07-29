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

  submit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div id="note-add-page">        
        <div id="note-add">
          <Header />

          <Title title={this.state.title} enterTitle={this.enterTitle} />

          <Description description={this.state.description} enterDescription={this.enterDescription} />

          <Commentaries />

           <Tags addTag={this.addTag} tags={this.state.tags} />

          <Button color="success" onClick={this.submit}> Create </Button>

        </div>
      </div>
    );
  }
}

export default Note;