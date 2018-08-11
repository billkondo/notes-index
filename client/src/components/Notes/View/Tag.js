import React from 'react';

class Tag extends React.Component {
  render() {
    return (
      <div className="tag-view">
        {this.props.tag}
      </div>
    );
  }
}

export default Tag;