import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import propTypes from 'prop-types';

import { writeTitle } from '../../actions/create-note';

const TitlePresent = (props) => (
  <div id="note-title">
    <div id="header">
      <div id="title"> Title </div>

      <div id="enterTitle">
        <InputGroup>
          <Input type="text" value={props.title} onChange={(e) => props.writeTitle(e.target.value)} />
        </InputGroup>
      </div>
    </div>

    <div className="separator">
    </div>
  </div>
);

TitlePresent.propTypes = {
  title: propTypes.string,
  writeTitle: propTypes.func
}

const Title = connect(
  (state) => ({
    title: state.createNote.title
  }),
  (dispatch) => ({
    writeTitle: (newTitle) => dispatch(writeTitle(newTitle))
  })
)(TitlePresent);

export default Title;