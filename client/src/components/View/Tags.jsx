import React from 'react';

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

export default Tags;
