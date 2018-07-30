import React from 'react';

import { InputGroup, Input } from 'reactstrap'; 

class Title extends React.Component {
  render() {
    return (
      <div id="note-title">
        <div id="header">
          <div id="title"> Title </div>

          <div id="enterTitle">
            <InputGroup>
              <Input type="text" value={this.props.title} onChange={this.props.enterTitle} />
            </InputGroup>
          </div>
        </div>

        <div className="separator">
        </div>
      </div>
    );
  }
}

export default Title;