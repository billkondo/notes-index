import React from 'react';

import HeaderView from './HeaderView';
import DescriptionView from './DescriptionView';
import CommentariesView from './CommentariesView';

class ViewNote extends React.Component {
  render() {
    return (
      <div id="view-note">
        <HeaderView />
        <DescriptionView />
        <CommentariesView />
      </div>
    );
  }
}

export default ViewNote;