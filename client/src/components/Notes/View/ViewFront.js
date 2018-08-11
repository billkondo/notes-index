import React from 'react';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';

import ViewBack from './ViewBack';

import FlipCard from '@kennethormandy/react-flipcard';

class ViewFront extends React.Component {
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
    );
  }
}

export default ViewFront;