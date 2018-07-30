import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import BoxTag from './BoxTag';

import {
  addNewTag
} from '../../actions/create-note';


class TagsPresent extends React.Component {
  state = {
    tag: "",
  }

  enterTag = (event) =>
    this.setState({
      tag: event.target.value
    });

  submitTag = () => {
    if (this.state.tag) {
      this.props.addTag(this.state.tag);
      this.setState({
        tag: ""
      });
    }
  }

  handleEnter = (event) => {
    if (event.key === 'Enter')
      this.submitTag();
  }

  render() {
    return (
      <div id="tags">
        <div id="tags-header">
          <div id="title"> Tags </div>

          <div id="write-menu">
            <InputGroup>
              <InputGroupAddon addonType="prepend"> # </InputGroupAddon>
              <Input placeholder="tag" onChange={this.enterTag} value={this.state.tag} onKeyPress={this.handleEnter} />
            </InputGroup>

            <div id="add" onClick={this.submitTag}> <i className="fas fa-plus" /> </div>
          </div>
        </div>

        <BoxTag tags={this.props.tags}/>

      </div>
    );
  }
}

const Tags = connect(
  (state) => ({
    tags: state.createNote.tags
  }),
  (dispatch) => ({
    addTag: (newTag) => dispatch(addNewTag(newTag))
  })
)(TagsPresent);

export default Tags;