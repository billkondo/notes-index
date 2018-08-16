import React from 'react';
import { connect } from 'react-redux';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';

import { CSSTransition } from 'react-transition-group';

const MenuUI = ({ transitionMenu }) => (
  <CSSTransition
    in={transitionMenu}
    appear={true}
    classNames={{
      appear: "animated",
      appearActive: "fadeIn",
      exit: "animated",
      exitActive: "zoomOut faster"
    }}
    timeout={{
      appear: 1000,
      exit: 500
    }}
  >
    <div id="menu-page">
      <div id="notes-menu-title"> Your Notes </div>
      <ContainerFunctions />
      <ContainerNotes />
    </div>
  </CSSTransition>
);

const Menu = connect(
  (state) => ({
    transitionMenu: state.cssTransitions.notesMenu
  })
)(MenuUI)

export default Menu;