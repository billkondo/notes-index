import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { enterSearchMenu } from '../../actions/search-menu';

const Functions = ({ enterSearchMenu }) => (
  <div className="favorite_functions">
    <Button color="primary" onClick={enterSearchMenu} className="favorite_add_button" >
      ADD
    </Button>
  </div>
);

export default connect(
  null, 
  { enterSearchMenu }
)(Functions);