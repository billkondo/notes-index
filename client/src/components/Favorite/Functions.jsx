import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { func } from 'prop-types';

import { enterSearchMenu } from '../../actions/search-menu';

const Functions = ({ enterSearchMenuConnect }) => (
  <div className="favorite_functions">
    <Button color="primary" onClick={enterSearchMenuConnect} className="favorite_add_button">
      ADD
    </Button>
  </div>
);

Functions.propTypes = {
  enterSearchMenuConnect: func.isRequired
};

export default connect(
  null,
  { enterSearchMenuConnect: enterSearchMenu }
)(Functions);
