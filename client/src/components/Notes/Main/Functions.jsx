import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { enterFilterMenu } from '../../../actions/filter';

const Functions = (props) => {
  const { enterFilterMenu } = props;
  const goToNotesAdd = () => props.history.push('/Notes/Add');
  const startFilter = () => enterFilterMenu(false);

  return (
    <div className="notes-functions" >
      <Button color="primary" className="functions-button" onClick={goToNotesAdd} > ADD </Button>
      <Button color="info" className="functions-button" onClick={startFilter} > FILTER </Button>
    </div>
  );
}

Functions.propTypes = {
  enterFilterMenu: propTypes.func.isRequired
}

export default withRouter(connect(
  null,
  { enterFilterMenu }
)(Functions));