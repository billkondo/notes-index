import React from 'react';
import { Button } from 'reactstrap';

const Delete = () => (
  <div className="ProfileDelete">
    <div className="DeleteTitle">Delete Profile </div>
    <div className="DeleteWarning"> This operation cannot be undone. Be careful! </div>
    <Button color="danger"> Delete </Button>
  </div>
);

export default Delete;