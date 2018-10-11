import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

const Functions = (props) => {
  const goToCollectionsAdd = () => props.history.push('/Collections/Add');

  return (
    <div className="collections-functions">
      <Button color="primary" className="functions-button" onClick={goToCollectionsAdd}> Add </Button>
      <Button color="info" className="functions-button" > Filter </Button>
    </div>
  );
}

export default withRouter(Functions);