import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { submitNote } from '../../../actions/notes-operations';

const Submit = (props) => {
  const { submitNote } = props;
  const updateURL = () => props.history.push('/Notes');
  
  return (
    <div className="notes-utils-submit">
      <Button className="submit" onClick={() => submitNote(updateURL)}> 
        Done   
      </Button>
    </div>
  );
}

export default withRouter(connect(
  null, 
  { submitNote }
)(Submit));