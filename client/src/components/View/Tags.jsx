import React from 'react';

import { tagsArray } from '../../propTypes/propTypes';

const Tags = ({ tags }) => (
  <div className="tags">
    <i className="fas fa-hashtag" />

    <div className="container-tags">
      {tags.map(tag => (
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
    </div>
  </div>
);

Tags.propTypes = {
  tags: tagsArray.isRequired
};

export default Tags;
