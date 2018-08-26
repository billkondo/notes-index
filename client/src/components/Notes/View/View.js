import React from 'react';
import { connect } from 'react-redux';
import Flipcard from '@kennethormandy/react-flipcard';

import ViewFront from './ViewFront';
import ViewBack from './ViewBack';

import { CSSTransition } from 'react-transition-group';

class ViewUI extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => this.setState((prevState) => ({ flipped: !prevState.flipped }))

  render() {
    return (
      <CSSTransition
        in={this.props.cssTransition}
        timeout={{
          appear: 800,
          exit: 500
        }}
        appear={true}
        classNames={{
          appear: "animated",
          exit: "animated",
          appearActive: "zoomIn fast",
          exitActive: "fadeOut faster"
        }}
      >
        <Flipcard id="view-page" flipped={this.state.flipped}>
          <ViewFront flipSide={this.flipSide} flipped={!this.state.flipped} />
          <ViewBack flipSide={this.flipSide} flipped={this.state.flipped} />
        </Flipcard>
      </CSSTransition>
    );
  }
}

const View = connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesView
  })
)(ViewUI);

export default View;