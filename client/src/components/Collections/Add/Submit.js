import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { submitCollection } from '../../../actions/collections-operations';

const Submit = ({ submitCollection }) => (
  <div className="collections-submit">
    <Button className="submit" onClick={submitCollection}>
      Done
    </Button>
  </div>
);

Submit.propTypes = {
  submitCollection: func.isRequired
}

export default connect(
  null, 
  { submitCollection }
)(Submit);