import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { string, func } from 'prop-types';

import Add from '../../Buttons/AddButton';
import ExitButton from '../../Buttons/ExitButton';
import { writeTag, addTag, deleteTag } from '../../../actions/collections-operations';
import prepareTag from '../../../utilities/tags';

import { tagsArray } from '../../../propTypes/propTypes';

class Tag extends React.Component {
  state = {
    mouseOn: false
  };

  onMouseLeave = () => this.setState({ mouseOn: false });

  onMouseOver = () => {
    const { mouseOn } = this.state;

    if (mouseOn) return;
    this.setState({ mouseOn: true });
  };

  onClick = () => {
    const { tag, deleteTagConnect } = this.props;
    deleteTagConnect(tag);
  };

  onFocus = () => this.setState({ mouseOn: true });

  onBlur = () => this.setState({ mouseOn: false });

  render() {
    const { tag } = this.props;
    const { mouseOn } = this.state;

    return (
      <div
        className="collections-utils-tag"
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {mouseOn && <ExitButton click={this.onClick} />}
        <span>{tag}</span>
      </div>
    );
  }
}

Tag.propTypes = {
  tag: string.isRequired,
  deleteTagConnect: func.isRequired
};

const TagsHeader = ({ tag, writeTagConnect, addTagConnect, canAdd }) => (
  <div className="collections-utils-tags-header">
    <div className="title-box">
      <div className="icon">
        <i className="fas fa-hashtag" />
      </div>
      <span className="title"> Tags </span>
    </div>

    <div className="collections-utils-tags-controls">
      <InputGroup>
        <InputGroupAddon addonType="prepend"> # </InputGroupAddon>
        <Input
          onChange={e => writeTagConnect(e.target.value)}
          value={tag}
          onKeyPress={e => {
            if (e.key === 'Enter' && canAdd()) addTagConnect(prepareTag(tag));
          }}
          className="Blue"
        />
      </InputGroup>

      <Add
        click={() => {
          if (canAdd()) addTagConnect(prepareTag(tag));
        }}
      />
    </div>
  </div>
);

TagsHeader.propTypes = {
  tag: string.isRequired,
  writeTagConnect: func.isRequired,
  addTagConnect: func.isRequired,
  canAdd: func.isRequired
};

const TagsContainer = ({ tags, deleteTagConnect }) => (
  <TransitionGroup className="collections-utils-tags-container">
    {tags.map(tag => (
      <CSSTransition
        key={tag}
        timeout={500}
        exit={false}
        classNames={{
          enter: 'animated',
          enterActive: 'fadeIn faster'
        }}
      >
        <Tag key={tag} tag={tag} deleteTagConnect={deleteTagConnect} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

TagsContainer.propTypes = {
  tags: tagsArray.isRequired,
  deleteTagConnect: func.isRequired
};

const Tags = ({ tag, tags, writeTagConnect, addTagConnect, deleteTagConnect }) => {
  const canAdd = () => {
    if (prepareTag(tag) && tags.indexOf(prepareTag(tag)) === -1) return true;

    return false;
  };

  return (
    <div className="collections-utils-tags">
      <TagsHeader
        writeTagConnect={writeTagConnect}
        tag={tag}
        addTagConnect={addTagConnect}
        canAdd={canAdd}
      />
      <TagsContainer tags={tags} deleteTagConnect={deleteTagConnect} />
    </div>
  );
};

Tags.propTypes = {
  tag: string.isRequired,
  tags: tagsArray.isRequired,
  writeTagConnect: func.isRequired,
  addTagConnect: func.isRequired,
  deleteTagConnect: func.isRequired
};

export default connect(
  state => ({
    tag: state.collectionsOperations.tag,
    tags: state.collectionsOperations.tags
  }),
  {
    writeTagConnect: writeTag,
    addTagConnect: addTag,
    deleteTagConnect: deleteTag
  }
)(Tags);
