import React from 'react';
import { connect } from 'react-redux';

import HeaderFromTags from './HeaderFromTags';
import TagsContainer from './TagsContainer';

import { addTag } from '../../../actions/notes-operations';

class TagsUI extends React.Component {
  state = {
    tag: "",
  }

  writeTag = (event) =>
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
      <div id="tags-note">
        <HeaderFromTags
          tag={this.state.tag}
          writeTag={this.writeTag}
          submitTag={this.submitTag}
          handleEnter={this.handleEnter}
        />

        <TagsContainer />

      </div>
    );
  }
}

const Tags = connect(
  (state) => ({}),
  (dispatch) => ({
    addTag: (newTag) => dispatch(addTag(newTag))
  })
)(TagsUI);

export default Tags;