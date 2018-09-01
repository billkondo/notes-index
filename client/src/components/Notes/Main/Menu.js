import React from 'react';
import { connect } from 'react-redux';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';
import Filter from './Filter';

import { CSSTransition } from 'react-transition-group';

import { endFilter } from '../../../actions/notes-routes';

class MenuUI extends React.Component {
  componentWillMount() {
    this.props.endFilter();
  }

  render() {
    return (
      <CSSTransition
        in={this.props.transitionMenu}
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
          <Filter />
          <ContainerNotes />
        </div>
      </CSSTransition>
    );
  }
}

const Menu = connect(
  (state) => ({
    transitionMenu: state.cssTransitions.notesMenu
  }),
  (dispatch) => ({
    endFilter: () => dispatch(endFilter())
  })
)(MenuUI)

export default Menu;