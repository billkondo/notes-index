import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { enterFilterMenu } from '../../../actions/filter';

import { historyObject } from '../../../propTypes/propTypes';

const Functions = props => {
  const { enterFilterMenuConnect, history } = props;
  const goToCollectionsAdd = () => history.push('/Collections/Add');
  const startFilter = () => enterFilterMenuConnect(0);

  return (
    <div className="collections-functions">
      <Button color="primary" className="functions-button" onClick={goToCollectionsAdd}>
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
