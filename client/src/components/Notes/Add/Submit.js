import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { submitNote } from '../../../actions/notes-operations';

const Submit = (props) => {
  const { submitNote, isLoading } = props;
  const updateURL = () => props.history.push('/Notes');
  
  return (
    <div className="notes-utils-submit">
      <Button 
        color="success" 
        className="submit" 
        onClick={() => submitNote(updateURL)}
        disabled={isLoading}
      > 
        Done   
      </Button>
    </div>
  );
}

export default withRouter(connect(
  (state) => ({
    isLoading: state.notesOperations.isLoading
  }), 
  { submitNote }
)(Submit));