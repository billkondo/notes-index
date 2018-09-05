import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Tag from './Tag';

import { deleteTag } from '../../../actions/notes-operations';

const TagsContainerUI = ({ tags, deleteTag }) => (
  <TransitionGroup className="tags-container">
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

const TagsContainer = connect(
  (state) => ({
    tags: state.notesOperations.tags
  }),
  (dispatch) => ({
    deleteTag: (tag) => dispatch(deleteTag(tag))
  })
)(TagsContainerUI)

export default TagsContainer