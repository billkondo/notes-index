import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ViewFront from './ViewFront';
import ViewBack from './ViewBack';

import { CSSTransition } from 'react-transition-group';

class View extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => this.setState((prevState) => ({ flipped: !prevState.flipped }))

  render() {
    const { flipped } = this.state;
    const { render } = this.props;

    return (
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
          exit: "animated",
          enterActive: "fadeIn fast",
          exitActive: "fadeOut faster"
        }}
      >
        <div className="view-page">
          <ViewFront flipSide={this.flipSide} flipped={!flipped} />
          <ViewBack flipSide={this.flipSide} flipped={flipped} />
        </div>
      </CSSTransition>
    );
  }
}

View.propTypes = {
  render: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    render: state.notesRouter.renderView
  })
)(View);
