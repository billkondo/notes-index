import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';

const TagsUI = ({ tags }) => (
  <div id="tags-view">
    <div id="tags-title">
      <div id="tag-icon"><i className="fas fa-hashtag" /></div>
      <div id="tag-title"> Tags </div>
    </div>

    <div id="tags-container">
      {
        tags.map((value, index) => {
          return (
            <Tag key={index} tag={value} />
          );
        })
      }
    </div>
  </div>
);

const Tags = connect(
  (state) => ({
    tags: state.notesOperations.tags
  })
)(TagsUI);

export default Tags;