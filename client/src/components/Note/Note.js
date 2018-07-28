import React from 'react';
import { Button } from 'reactstrap';

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

  submit = () => {
    console.log(this.state);
  }

  addTag = (tag) => 
    this.setState((prevState) => {
      return {
        tags: prevState.tags.concat([tag])
      }
    });

  render() {
    return (
      <div id="note-add-page">
        <div id="note-add">
          <div id="header">
            <div id="header-title"> Create Note </div>

            <div id="exit">
              <i className="fas fa-times" />
            </div>
          </div>

          <div id="note-title">
            <label>
              {"Title "}

              <input type="text" value={this.state.title} onChange={this.enterTitle} />
            </label>
          </div>

          <div id="note-description">
            <label id="description"> Description </label>

            <input type="text" value={this.state.description} onChange={this.enterDescription} />
          </div>

          <div id="commentaries">

            <div id="commentaries-header">
              <div id="commentaries-header-title">Commentaries</div>
              <div id="commentaries-add"> <i className="fas fa-plus-circle" /> </div>
            </div>

            <div id="commentaries-box">
            </div>

          </div>

          <Tags addTag={this.addTag} tags={this.state.tags} />

          <Button color="success" onClick={this.submit}> Create </Button>

        </div>
      </div>
    );
  }
}

export default Note;