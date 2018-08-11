import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';
import propTypes from 'prop-types';

import { writeTitle } from '../../../actions/create-note';

const TitleUI = ({ title, writeTitle }) => (
  <div id="note-title">
    <div id="header">
      <div id="title"> Title </div>

      <div id="enterTitle">
        <InputGroup>
          <Input type="text" value={title} onChange={(e) => writeTitle(e.target.value)} />
        </InputGroup>
      </div>
    </div>

    <div className="separator">
    </div>
  </div>
);

TitleUI.propTypes = {
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
)(TitleUI);

export default Title;