import React from 'react';

class TagView extends React.Component {
  render() {
    return (
      <div className="tag-view">
        {this.props.tag}
      </div>
    );
  }
}

export default TagView;