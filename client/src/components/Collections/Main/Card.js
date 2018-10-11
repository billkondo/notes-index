import React from 'react';

class Card extends React.Component {
  state = {
    side: false
  }

  render() {
    const { collection } = this.props;
    const { title, description, tags } = collection;

    return (
      <div className="collections-main-card">
        <div className="title">
          {title}
        </div>

        <div className="description">
          {description}
        </div>
      </div>
    );
  }
}

export default Card;