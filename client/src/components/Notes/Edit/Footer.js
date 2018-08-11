import React from 'react';

import { Button } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer-edit">
        <Button color="success"> Finish </Button>
        <div id="trash">
          <i className="fas fa-trash-alt" />
        </div>
      </div>
    );
  }
}

export default Footer;