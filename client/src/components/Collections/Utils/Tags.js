import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import Add from '../../Buttons/AddButton';
import { writeTag, addTag } from '../../../actions/collections-operations';

const Tag = ({tag}) => (
  <div className="collections-utils-tag">
    <span>{tag}</span>
  </div>
);

const TagsHeader = ({ tag, writeTag, addTag, canAdd }) => (
  <div className="collections-utils-tags-header">
    <div className="title-box">
      <div className="icon"> <i className="fas fa-hashtag" /> </div>
      <span className="title"> Tags </span>
    </div>

    <div className="collections-utils-tags-controls">
      <InputGroup>
        <InputGroupAddon addonType="prepend"> # </InputGroupAddon>
        <Input 
          onChange={e => writeTag(e.target.value)} 
          value={tag} 
          onKeyPress={e => {
            if (e.key === 'Enter' && canAdd())
              addTag(tag);
          }}
        />
      </InputGroup>

      <Add 
        click={() => {
          if (canAdd())
            addTag(tag);
        }}
      />
    </div>
  </div>
);

const TagsContainer = ({ tags }) => (
  <div className="collections-utils-tags-container">
    {
      tags.map(tag => <Tag key={tag} tag={tag}/>)
    }
  </div>
);

const Tags = ({ tag, tags, writeTag, addTag }) => {
  const canAdd = () => {
    if (tag.trim() && tags.indexOf(tag) === -1)
      return true;

    return false;
  }

  return (
    <div className="collections-utils-tags">
      <TagsHeader writeTag={writeTag} tag={tag} addTag={addTag} canAdd={canAdd}/>
      <TagsContainer tags={tags}/>
    </div>
  );
}

export default connect(
  (state) => ({
    tag: state.collectionsOperations.tag,
    tags: state.collectionsOperations.tags
  }),
  { writeTag, addTag }
)(Tags);