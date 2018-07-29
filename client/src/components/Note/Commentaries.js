import React from 'react';
import Commentary from './Commentary';

class Commentaries extends React.Component {
  render() {
    return (
      <div id="commentaries">

        <div id="commentaries-header">
          <div id="commentaries-header-title">Commentaries</div>
          <div id="commentaries-add"> <i className="fas fa-plus" /> </div>
        </div>

        <div id="commentaries-box">
          
        </div>

        <div className="separator">
        </div>

      </div>
    );
  }
}

export default Commentaries;