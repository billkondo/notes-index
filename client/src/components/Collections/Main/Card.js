import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { object, func } from 'prop-types';

import { setID } from '../../../actions/collections-data';

class Card extends React.Component {
  state = {
    side: false
  }

  edit = () => {
    const { id } = this.props.collection;

    this.props.history.push(`/Collections/Edit/${id}`);
  }

  view = () => {
    const { id } = this.props.collection;
    const { setID } = this.props;

    setID(id);
  }

  render() {
    const { collection } = this.props;
    const { title, description, favorite } = collection;

    return (
      <div className="collections-main-card">
        <div className="Collections-Card-Title">
          {truncate(title, { 'length': 15 })}
          { favorite && <i className="fas fa-star Favorite-Card" />}
        </div>

        <textarea
          className="description"
          readOnly
          value={description}
          disabled
        />
        
        <div className="footer">
          <button className="icon edit" onClick={this.edit}> <i className="fas fa-edit" /> </button>
          <button className="icon" onClick={this.view}> <i className="fas fa-eye" /> </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collection: object.isRequired,
  setID: func.isRequired
}

export default withRouter(connect(
  null, 
  { setID }
)(Card));