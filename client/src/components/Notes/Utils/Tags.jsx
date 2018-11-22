import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { func, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import AddButton from '../../Buttons/AddButton';
import { addTag, writeTag, deleteTag } from '../../../actions/notes-operations';
import prepareTag from '../../../utilities/tags';

import { tagsArray } from '../../../propTypes/propTypes';

const Header = ({ tag, writeTagConnect, addTagConnect, canAdd }) => (
  <div className="header">
    <div className="title">
      <i className="fas fa-hashtag" />
      Tags
    </div>

    <div className="controls">
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

      <AddButton
        click={() => {
          if (canAdd()) addTagConnect(prepareTag(tag));
        }}
      />
    </div>
  </div>
);

Header.propTypes = {
  tag: string.isRequired,
  writeTagConnect: func.isRequired,
  addTagConnect: func.isRequired,
  canAdd: func.isRequired
};

class Tag extends React.Component {
  state = {
    mouseOver: false
  };

  onMouseEnter = () => this.setState({ mouseOver: true });

  onMouseLeave = () => this.setState({ mouseOver: false });

  onMouseOver = () => {
    const { mouseOver } = this.state;

    if (!mouseOver) this.setState({ mouseOver: true });
  };

  onFocus = () => this.setState({ mouseOver: true });

  onBlur = () => this.setState({ mouseOver: false });

  render() {
    const { tag, deleteTagConnect } = this.props;
    const { mouseOver } = this.state;

    return (
      <div
        className="tag"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {tag}
        {mouseOver && <ExitButton click={deleteTagConnect} />}
      </div>
    );
  }
}

Tag.propTypes = {
  tag: string.isRequired,
  deleteTagConnect: func.isRequired
};

const Container = ({ tags, deleteTagConnect }) => (
  <TransitionGroup className="container-tags">
    {tags.map(key => (
      <CSSTransition
        key={key}
        timeout={500}
        classNames={{
          enter: 'animated',
          enterActive: 'zoomIn faster'
        }}
        exit={false}
      >
        <Tag key={key} tag={key} deleteTagConnect={() => deleteTagConnect(key)} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Container.propTypes = {
  tags: tagsArray.isRequired,
  deleteTagConnect: func.isRequired
};

const Tags = ({ tag, tags, addTagConnect, writeTagConnect, deleteTagConnect }) => {
  const canAdd = () => {
    if (prepareTag(tag) && tags.indexOf(prepareTag(tag)) === -1) return true;
    return false;
  };

  return (
    <div className="notes-utils-tags">
      <Header
        tag={tag}
        writeTagConnect={writeTagConnect}
        addTagConnect={addTagConnect}
        canAdd={canAdd}
      />
      <Container tags={tags} deleteTagConnect={deleteTagConnect} />
    </div>
  );
};

Tags.propTypes = {
  tag: string.isRequired,
  tags: tagsArray.isRequired,
  addTagConnect: func.isRequired,
  writeTagConnect: func.isRequired,
  deleteTagConnect: func.isRequired
};

export default connect(
  state => ({
    tag: state.notesOperations.tag,
    tags: state.notesOperations.tags
  }),
  {
    addTagConnect: addTag,
    writeTagConnect: writeTag,
    deleteTagConnect: deleteTag
  }
)(Tags);
