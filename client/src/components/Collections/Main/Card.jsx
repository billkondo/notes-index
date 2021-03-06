import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import Fade from '../../High_Order/Fade';

import { collectionObject, historyObject } from '../../../propTypes/propTypes';

class Card extends React.Component {
  edit = () => {
    const { history, collection } = this.props;
    const { id } = collection;

    history.push(`/Collections/Edit/${id}`);
  };

  view = () => {
    const { collection, history } = this.props;
    const { id } = collection;

    history.push(`/Collections/View/${id}`);
  };

  render() {
    const { collection } = this.props;
    const { title, description, favorite } = collection;

    return (
      <div className="collections-main-card">
        <div className="Collections-Card-Title">
          {truncate(title, { length: 15 })}
          {favorite && <i className="fas fa-star Favorite-Card" />}
        </div>

        <textarea className="description" readOnly value={description} disabled />

        <div className="footer">
          <button type="button" className="icon edit" onClick={this.edit}>
            <i className="fas fa-edit" />
          </button>

          <button type="button" className="icon" onClick={this.view}>
            <i className="fas fa-eye" />
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collection: collectionObject.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(state => ({
    idToLoad: state.collectionsData.idToLoad
  }))(Fade(Card))
);
