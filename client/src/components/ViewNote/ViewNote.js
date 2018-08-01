import React from 'react';

import HeaderView from './HeaderView';
import DescriptionView from './DescriptionView';
import CommentariesView from './CommentariesView';
import FooterView from './FooterView';

class ViewNote extends React.Component {
  render() {
    return (
      <div id="view-note">
        <HeaderView />
        <DescriptionView />
        <CommentariesView />
        <FooterView />
      </div>
    );
  }
}

export default ViewNote;