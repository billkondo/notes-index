import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { func, bool } from 'prop-types';

import { submitCollection } from '../../../actions/collections-operations';

const Submit = (props) => {
  const { isLoading, submitCollection } = props;
  const updateURL = () => props.history.push('/Collections');

  return (
    <div className="collections-submit">
      <Button 
        color="success" 
        className="submit" 
        onClick={() => submitCollection(updateURL)} 
        disabled={isLoading} 
      >
        Done
      </Button>
    </div>
  );
}

Submit.propTypes = {
  isLoading: bool.isRequired, 
  submitCollection: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    isLoading: state.collectionsOperations.isLoading
  }), 
  { submitCollection }
)(Submit));