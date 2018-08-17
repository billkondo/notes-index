import React from 'react';
import { connect } from 'react-redux';

import ViewFront from './ViewFront';
import ViewBack from './ViewBack';

import { CSSTransition } from 'react-transition-group';

class ViewUI extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => {
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          flipped: !prevState.flipped
        }
      });
    }, 800);
  }

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
        <div id="view-page">
          <ViewFront flipSide={this.flipSide} flipped={!this.state.flipped} />
          <ViewBack flipSide={this.flipSide} flipped={this.state.flipped} />
        </div>
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