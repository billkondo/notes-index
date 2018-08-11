import React from 'react';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-page">
        <div id="notes-menu-title"> Your Notes </div>
        <ContainerFunctions />
        <ContainerNotes />
      </div>
    );
  }
}

export default Menu;