import React from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

// Components
import Tag from './Tag';

// Functions
import { deleteTag } from '../../actions/create-note';

class BoxTagUI extends React.Component {
  componentDidUpdate() {
    console.log(this.props.tags);
  }
  render() {
    return (
      <div 
        className="box-tag" 
      >
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