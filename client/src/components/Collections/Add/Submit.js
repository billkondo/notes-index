import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { func, bool } from 'prop-types';

import { submitCollection } from '../../../actions/collections-operations';

const Submit = ({ isLoading, submitCollection }) => (
  <div className="collections-submit">
    <Button className="submit" onClick={submitCollection} disabled={isLoading} >
      Done
    </Button>
  </div>
);

Submit.propTypes = {
  isLoading: bool.isRequired, 
  submitCollection: func.isRequired
}

export default connect(
  (state) => ({
    isLoading: state.collectionsOperations.isLoading
  }), 
  { submitCollection }
)(Submit);