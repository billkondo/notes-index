import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Functions from './Functions';

const Menu = ({ render }) => (
  <div className="collections-page">
    <CSSTransition
      in={render}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={{
        enter: 800,
        exit: 500
      }}
      classNames={{
        enter: "animated",
        enterActive: "fadeIn fast",
        exit: "animated",
        exitActive: "fadeOut faster"
      }}
    > 
      <div className="collections-menu">
        <div className="collections-title"> Collections </div>

        <Functions />
      </div> 
    </CSSTransition>
  </div>
);

Menu.propTypes = {
  render: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    render: state.collectionsRouter.renderMenu
  })
)(Menu);