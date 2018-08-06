import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

// Components
import BoxTag from './BoxTag';
import AddButton from '../Buttons/AddButton';

// Functions
import {
  addNewTag
} from '../../actions/create-note';


class TagsUI extends React.Component {
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

            <AddButton click={this.submitTag} />
          </div>
        </div>

        <BoxTag />

      </div>
    );
  }
}

const Tags = connect(
  (state) => ({}),
  (dispatch) => ({
    addTag: (newTag) => dispatch(addNewTag(newTag))
  })
)(TagsUI);

export default Tags;