import React from 'react';

// Components
import Tag from './Tag';

class BoxTag extends React.Component {
  render() {
    return (
      <div id="tags-box">
        {
          this.props.tags.map((key, index) => {
            return (
              <Tag
                key={index}
                tag={key}
                index={index}
              />
            );
          })
        }
      </div>
    );
  }
}

export default BoxTag