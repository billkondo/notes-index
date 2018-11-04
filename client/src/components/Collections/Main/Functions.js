import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { filterLoad } from '../../../actions/modal';

const Functions = (props) => {
  const { filterLoad } = props;
  const goToCollectionsAdd = () => props.history.push('/Collections/Add');
  const startFilter = () => filterLoad(0);

  return (
    <div className="collections-functions">
      <Button color="primary" className="functions-button" onClick={goToCollectionsAdd}> ADD </Button>
      <Button color="info" className="functions-button" onClick={startFilter} > FILTER </Button>
    </div>
  );
}

export default withRouter(connect(
  null, 
  { filterLoad }
)(Functions));