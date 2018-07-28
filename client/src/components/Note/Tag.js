import React from 'react';

class Tag extends React.Component {
  componentWillMount() {
    console.log(this.props.tag);
  }
  render() {
    return (
      <div id="tag">
        {this.props.tag}
      </div>
    );
  }
}

export default Tag;