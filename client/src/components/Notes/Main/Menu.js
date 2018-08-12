import React from 'react';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';

import { CSSTransition } from 'react-transition-group';

class Menu extends React.Component {
  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        classNames={{
          appear: "animated",
          appearActive: "fadeIn"
        }}
        timeout={1000}
      >
        <div id="menu-page">
          <div id="notes-menu-title"> Your Notes </div>
          <ContainerFunctions />
          <ContainerNotes />
        </div>
      </CSSTransition>
    );
  }
}

export default Menu;