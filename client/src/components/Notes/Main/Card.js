import React from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import truncate from 'lodash/truncate';

class Card extends React.Component {
  state = {
    side: false
  }

  editURL = () => {
    const { id } = this.props.note;
    this.props.history.push(`/Notes/Edit/${id}`);
  }

  render() {
    const { note } = this.props;
    const { title, description, tags } = note;

    return (
      <div className="notes-main-card">
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
  note: object.isRequired
}

export default withRouter(Card);