import React from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import truncate from 'lodash/truncate';

class Card extends React.Component {
  state = {
    side: false
  }

  editURL = () => {
    const { id } = this.props.collection;
    this.props.history.push(`/Collections/Edit/${id}`);
  }

  render() {
    const { collection } = this.props;
    const { title, description, tags } = collection;

    return (
      <div className="collections-main-card">
        <div className="title">
          {truncate(title, { 'length': 15 })}
        </div>

        <div className="description">
          {description}
        </div>

        <div className="footer">
          <div className="icon edit" onClick={this.editURL}> <i className="fas fa-edit" /> </div>
          <div className="icon"> <i className="fas fa-eye" /> </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collection: object.isRequired
}

export default withRouter(Card);