import React from 'react';

import HeaderView from './HeaderView';
import DescriptionView from './DescriptionView';
import CommentariesView from './CommentariesView';
import FooterView from './FooterView';

import FlipCard from '@kennethormandy/react-flipcard';

class ViewNote extends React.Component {
  state = {
    flipped: false
  }

  flipSide = () => {
    console.log('click');
    this.setState((prevState) => {
      return {
        flipped: !prevState.flipped
      }
    })
  }

  render() {
    return (
      <div id="view-page">
        <FlipCard flipped={this.state.flipped}>
          <div className="view-note">
            <HeaderView />
            <DescriptionView />
            <CommentariesView />
            <FooterView flipSide={this.flipSide} />
          </div>

          <div className="view-note">
            <HeaderView />
          </div>
        </FlipCard>
      </div>
    );
  }
}

export default ViewNote;