import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';
import ViewBack from './ViewBack';

import { CSSTransition } from 'react-transition-group';

import FlipCard from '@kennethormandy/react-flipcard';

class ViewFrontUI extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () =>
    this.setState((prevState) => {
      return {
        flipped: !prevState.flipped
      }
    })

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
          <FlipCard flipped={this.state.flipped}>
            <div className="view-note">
              <Header />
              <Description />
              <Commentaries />
              <Footer flipSide={this.flipSide} />
            </div>

            <div className="view-note">
              <Header />
              <ViewBack flipSide={this.flipSide} />
            </div>
          </FlipCard>
        </div>
      </CSSTransition>
    );
  }
}

const ViewFront = connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesView
  })
)(ViewFrontUI);

export default ViewFront;