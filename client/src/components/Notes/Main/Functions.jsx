import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { enterFilterMenu } from '../../../actions/filter';

import { historyObject } from '../../../propTypes/propTypes';

const Functions = props => {
  const { enterFilterMenuConnect, history } = props;
  const goToNotesAdd = () => history.push('/Notes/Add');
  const startFilter = () => enterFilterMenuConnect(false);

  return (
    <div className="notes-functions">
      <Button color="primary" className="functions-button" onClick={goToNotesAdd}>
        ADD
      </Button>

      <Button color="info" className="functions-button" onClick={startFilter}>
        FILTER
      </Button>
    </div>
  );
};

Functions.propTypes = {
  enterFilterMenuConnect: func.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    null,
    { enterFilterMenuConnect: enterFilterMenu }
  )(Functions)
);
