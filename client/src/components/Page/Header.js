import React from 'react';

import Add from './Add';
import Profile from './Profile';

class PageHeader extends React.Component {
  render() {
    return (
      <div id="page-header">
        <div id="page-middle">
          <p> Notes Index </p>

          <div id="page-user">
            <Add />
            <Profile />
          </div>
        </div>
      </div>
    );  
  }
}

export default PageHeader;