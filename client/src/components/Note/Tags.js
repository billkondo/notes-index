import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import BoxTag from './BoxTag';


class Tags extends React.Component {
  state = {
    tag: "",
    value: ""
  }

  enterTag = (event) =>
    this.setState({
      tag: event.target.value,
      value: event.target.value
    });

  submitTag = () => {
    if (this.state.tag) {
      this.props.addTag(this.state.tag);
      this.setState({
        tag: "",
        value: ""
      });
    }
  }

  render() {
    return (
      <div id="tags">
        <div id="tags-header">
          <div id="title"> Tags </div>

          <div id="write-menu">
            <InputGroup>
              <InputGroupAddon addonType="prepend"> # </InputGroupAddon>
              <Input placeholder="tag" onChange={this.enterTag} value={this.state.value} />
            </InputGroup>

            <div id="add" onClick={this.submitTag}> <i className="fas fa-plus" /> </div>
          </div>
        </div>

        <BoxTag tags={this.props.tags}/>

      </div>
    );
  }
}

export default Tags;