import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';
import Filter from './Filter';

import { CSSTransition } from 'react-transition-group';

import { endFilter } from '../../../actions/notes-router';

class Menu extends React.Component {
  componentWillMount() {
    this.props.endFilter();
  }

  render() {
    const { render } = this.props;

    return (
      <div className="notes-page">
        <CSSTransition
          in={render}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={{
            enter: "animated",
            enterActive: "fadeIn fast",
            exit: "animated",
            exitActive: "fadeOut faster"
          }}
          timeout={{
            enter: 800,
            exit: 500
          }}
        >
          <div className="notes-menu">
            <div className="notes-title"> Notes </div>
            <ContainerFunctions />
            <Filter />
            <ContainerNotes />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

Menu.propTypes = {
  render: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    render: state.notesRouter.renderMenu
  }),
  (dispatch) => ({
    endFilter: () => dispatch(endFilter())
  })
)(Menu);