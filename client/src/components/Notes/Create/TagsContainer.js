import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tag from './Tag';

import { deleteTag } from '../../../actions/create-note';

const TagsContainerUI = ({ tags, deleteTag }) => (
  <TransitionGroup className="tags-container">
    {
      tags.map((key, index) => {
        return (
          <CSSTransition
            key={key}
            timeout={800}
            classNames={{
              enter: "animated",
              enterActive: "fadeIn fast",
              exit: "animated",
              exitActive: "fadeOutUp fast"
            }}
            appear={true}
          >
            <Tag
              key={key}
              tag={key}
              deleteTag={() => deleteTag(index)}
            />
          </CSSTransition>
        );
      })
    }
  </TransitionGroup>
);

const TagsContainer = connect(
  (state) => ({
    tags: state.createNote.tags
  }),
  (dispatch) => ({
    deleteTag: (index) => dispatch(deleteTag(index))
  })
)(TagsContainerUI)

export default TagsContainer