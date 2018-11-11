import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { filterLoad } from '../../../actions/filter';

const Functions = props => {
  const { filterLoadConnect } = props;
  const goToCollectionsAdd = () => props.history.push('/Collections/Add');
  const startFilter = () => filterLoadConnect(0);

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

export default withRouter(
  connect(
    null,
    { filterLoadConnect: filterLoad }
  )(Functions)
);
