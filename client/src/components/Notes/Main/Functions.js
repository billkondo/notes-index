import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button  } from 'reactstrap';

import { filterOn } from '../../../actions/notes-data';

const Functions = (props) => {
  const { filterOn } = props;
  const goToNotesAdd = () => props.history.push('/Notes/Add');

  return (
    <div className="notes-functions" >
      <Button className="functions-button" onClick={goToNotesAdd} > Create </Button>
      <Button className="functions-button" onClick={filterOn} > Filter </Button>
    </div>
  );
}

Functions.propTypes = {
  filterOn: propTypes.func.isRequired
}

export default withRouter(connect(
  null,
  { filterOn }
)(Functions));