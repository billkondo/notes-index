import React from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import Tag from './Tag';

import { deleteTag } from '../../actions/create-note';

class BoxTagUI extends React.Component {
  render() {
    return (
      <div className="tags-container">
        {
          this.props.tags.map((key, index) => {
            return (
              <Tag
                key={index}
                tag={key}
                delete={() => this.props.delete(index)}
              />
            );
          })
        }
      </div>
    );
  }
}

const BoxTag = connect(
  (state) => ({
    tags: state.createNote.tags
  }),
  (dispatch) => ({
    delete: (index) => dispatch(deleteTag(index))
  })
)(BoxTagUI)

export default BoxTag