import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button  } from 'reactstrap';

import { filterLoad } from '../../../actions/modal';

const Functions = (props) => {
  const { filterLoad } = props;
  const goToNotesAdd = () => props.history.push('/Notes/Add');
  const startFilter = () => filterLoad(1);

  return (
    <div className="notes-functions" >
      <Button color="primary" className="functions-button" onClick={goToNotesAdd} > Add </Button>
      <Button color="info" className="functions-button" onClick={startFilter} > Filter </Button>
    </div>
  );
}

Functions.propTypes = {
  filterLoad: propTypes.func.isRequired
}

export default withRouter(connect(
  null,
  { filterLoad }
)(Functions));