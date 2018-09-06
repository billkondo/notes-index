import React from 'react';
import { connect } from 'react-redux';
import ViewFront from './ViewFront';
import ViewBack from './ViewBack';
import propTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

class View extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => this.setState((prevState) => ({ flipped: !prevState.flipped }))

  render() {
    const { flipped } = this.state;
    const { cssTransition } = this.props;

    return (
      <CSSTransition
        in={cssTransition}
        timeout={{
          appear: 800,
          exit: 500
        }}
        appear={true}
        classNames={{
          appear: "animated",
          exit: "animated",
          appearActive: "fadeIn fast",
          exitActive: "fadeOut faster"
        }}
      >
        <div id="view-page">
          <ViewFront flipSide={this.flipSide} flipped={!flipped} />
          <ViewBack flipSide={this.flipSide} flipped={flipped} />
        </div>
      </CSSTransition>
    );
  }
}

View.propTypes = {
  cssTransition: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesView
  })
)(View);
