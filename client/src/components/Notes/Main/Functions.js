import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { startFilter } from '../../../actions/notes-router';

import { Button  } from 'reactstrap';;

const Functions = (props) => {
  const { startFiler } = props;
  const goToNotesAdd = () => props.history.push('/Notes/Add');

  return (
    <div className="notes-functions" >
      <Button className="functions-button" onClick={goToNotesAdd} > Create </Button>
      <Button className="functions-button" onClick={startFilter} > Filter </Button>
    </div>
  );
}

Functions.propTypes = {
  startFilter: propTypes.func.isRequired
}

export default withRouter(connect(
  null, 
  { startFilter }
)(Functions));