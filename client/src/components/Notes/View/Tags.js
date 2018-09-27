import React from 'react';
import { connect } from 'react-redux';

const Tag = ({ tag }) => (
  <div className="tag">
    {tag}
  </div>
);

const Tags = ({ tags }) => (
  <div className="notes-tags-view">
    <div className="header">
      <i className="fas fa-hashtag icon" />
      Tags
    </div>

    <div className="tags">
      {
        tags.map(tag => <Tag key={tag} tag={tag} />)
      }
    </div>
  </div>
);

export default connect(
  (state) => ({
    tags: state.notesOperations.tags
  })
)(Tags);