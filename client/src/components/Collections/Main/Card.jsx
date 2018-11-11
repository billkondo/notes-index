import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { func, bool, string } from 'prop-types';

import Fade from '../../High_Order/Fade';
import Loading from '../../Animation/Loading';

import { setID } from '../../../actions/collections-data';

import { collectionObject, historyObject } from '../../../propTypes/propTypes';

class Card extends React.Component {
  edit = () => {
    const { history, collection } = this.props;
    const { id } = collection;

    history.push(`/Collections/Edit/${id}`);
  };

  view = () => {
    const { collection } = this.props;
    const { id } = collection;
    const { setIDConnect } = this.props;

    setIDConnect(id);
  };

  render() {
    const { collection, collectionIsLoading, idToLoad } = this.props;
    const { title, description, favorite, id } = collection;

    return (
      <div className="collections-main-card">
        <div className="Collections-Card-Title">
          {truncate(title, { length: 15 })}
          {favorite && <i className="fas fa-star Favorite-Card" />}
        </div>

        <textarea className="description" readOnly value={description} disabled />

        <div className="footer">
          {collectionIsLoading && idToLoad === id && (
            <Loading
              positionStyle={{
                position: 'absolute',
                fontSize: '0.9 rem',
                left: 0
              }}
              iconStyle=" font-size-1_2-rem"
            />
          )}

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
  setIDConnect: func.isRequired,
  collectionIsLoading: bool.isRequired,
  idToLoad: string.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    state => ({
      collectionIsLoading: state.view.collectionIsLoading,
      idToLoad: state.collectionsData.idToLoad
    }),
    { setIDConnect: setID }
  )(Fade(Card))
);
