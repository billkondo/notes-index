import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import AddButton from '../../Buttons/AddButton';
import { addTag, writeTag, deleteTag } from '../../../actions/notes-operations';

const Header = ({ tag, writeTag, addTag, canAdd }) => (
  <div className="header">
    <div className="title">
      <i className="fas fa-hashtag" />
      Tags
    </div>

    <div className="controls">
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

      <AddButton 
        click={() => {
          if (canAdd())
            addTag(tag);
        }}
      />
    </div>
  </div>
);

class Tag extends React.Component {
  state = {
    mouseOver: false
  }

  onMouseEnter = () => this.setState({ mouseOver: true });
  onMouseLeave = () => this.setState({ mouseOver: false });
  onMouseOver = () => {
    const { mouseOver } = this.state;

    if (!mouseOver) 
      this.setState({ mouseOver: true });
  }

  render() {
    const { tag, deleteTag } = this.props;
    const { mouseOver } = this.state;

    return (
      <div 
        className="tag" 
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        {tag}
        {mouseOver && <ExitButton click={deleteTag}/>}
      </div>
    );
  }
}

const Container = ({ tags, deleteTag }) => (
  <TransitionGroup className="container-tags">
    {
      tags.map(key => {
        return (
          <CSSTransition
            key={key}
            timeout={500}
            classNames={{
              enter: "animated",
              enterActive: "zoomIn faster"
            }}
            exit={false}
          >
            <Tag
              key={key}
              tag={key}
              deleteTag={() => deleteTag(key)}
            />
          </CSSTransition>
        );
      })  
    }
  </TransitionGroup>
);

const Tags = ({ tag, tags, addTag, writeTag, deleteTag }) => {
  const canAdd = () => {
    if (tag && tags.indexOf(tag) === -1) 
      return true;
    return false;
  }
  
  return (
    <div className="notes-utils-tags">
      <Header tag={tag} writeTag={writeTag} addTag={addTag} canAdd={canAdd} />
      <Container tags={tags} deleteTag={deleteTag} />
    </div>
  );
}

Tags.propTypes = {
  tag: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired
}

export default connect(
  (state) => ({
    tag: state.notesOperations.tag, 
    tags: state.notesOperations.tags
  }),
  { addTag, writeTag, deleteTag }
)(Tags);