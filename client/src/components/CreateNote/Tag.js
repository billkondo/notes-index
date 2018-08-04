import React from 'react';
import { connect } from 'react-redux';

// Components
import ExitButton from '../ExitButton';

// Functions
import { deleteTag } from '../../actions/create-note';

const TagUI = (props) => (
  <div className="tag">
    {props.tag}
    <ExitButton click={() => props.delete(props.index)} />
  </div>
);

const Tag = connect(
  (state) => ({}),
  (dispatch) => ({
    delete: (index) => dispatch(deleteTag(index))
  })
)(TagUI);

export default Tag;