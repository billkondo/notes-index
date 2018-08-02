import React from 'react';

import Functions from './Functions';
import UserNotes from './UserNotes';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-page">
        <div id="notes-menu-title"> Your Notes </div>
        <Functions />
        <UserNotes />
      </div>
    );
  }
}

export default Menu;