import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input } from 'reactstrap';

import { enterNewTitle } from '../../actions/create-note';

const TitlePresent = (props) => (
  <div id="note-title">
    <div id="header">
      <div id="title"> Title </div>

      <div id="enterTitle">
        <InputGroup>
          <Input type="text" value={props.title} onChange={(e) => props.enterTitle(e.target.value)} />
        </InputGroup>
      </div>
    </div>

    <div className="separator">
    </div>
  </div>
);

const Title = connect(
  (state) => ({
    title: state.createNote.title
  }),
  (dispatch) => ({
    enterTitle: (newTitle) => dispatch(enterNewTitle(newTitle))
  })
)(TitlePresent);

export default Title;