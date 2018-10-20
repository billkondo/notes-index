import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { string, array, func } from 'prop-types';

import Add from '../../Buttons/AddButton';
import ExitButton from '../../Buttons/ExitButton';
import { writeTag, addTag, deleteTag } from '../../../actions/collections-operations';
import { prepareTag } from '../../../utilities/tags';

class Tag extends React.Component {
  state = {
    mouseOn: false
  }

  onMouseLeave = () => this.setState({ mouseOn: false });

  onMouseOver = () => {
    const { mouseOn } = this.state;

    if (mouseOn) return;
    this.setState({ mouseOn: true });
  }

  onClick = () => {
    const { tag, deleteTag } = this.props;
    deleteTag(tag);
  }

  render() {
    const { tag } = this.props;
    const { mouseOn } = this.state;

    return (
      <div 
        className="collections-utils-tag"
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        { mouseOn && <ExitButton click={this.onClick} /> }
        <span>{tag}</span>
      </div>
    );
  }
}

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
              addTag(prepareTag(tag));
          }}
          className="Blue"
        />
      </InputGroup>

      <Add 
        click={() => {
          if (canAdd())
            addTag(prepareTag(tag));
        }}
      />
    </div>
  </div>
);

const TagsContainer = ({ tags, deleteTag }) => (
  <TransitionGroup className="collections-utils-tags-container">
    {
      tags.map(tag => 
        <CSSTransition
          key={tag}
          timeout={500}
          exit={false}
          classNames={{
            enter: "animated", 
            enterActive: "fadeIn faster"
          }}
        >
          <Tag key={tag} tag={tag} deleteTag={deleteTag} />
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

const Tags = ({ tag, tags, writeTag, addTag, deleteTag }) => {
  const canAdd = () => {
    if (prepareTag(tag) && tags.indexOf(prepareTag(tag)) === -1)
      return true;

    return false;
  }

  return (
    <div className="collections-utils-tags">
      <TagsHeader writeTag={writeTag} tag={tag} addTag={addTag} canAdd={canAdd}/>
      <TagsContainer tags={tags} deleteTag={deleteTag} />
    </div>
  );
}

Tags.propTypes = {
  tag: string.isRequired,
  tags: array.isRequired,
  writeTag: func.isRequired,
  addTag: func.isRequired,
  deleteTag: func.isRequired
}

export default connect(
  (state) => ({
    tag: state.collectionsOperations.tag,
    tags: state.collectionsOperations.tags
  }),
  { writeTag, addTag, deleteTag }
)(Tags);