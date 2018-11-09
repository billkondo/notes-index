import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { object, func, bool, string } from 'prop-types';

import Fade from '../../High_Order/Fade';
import Loading from '../../Animation/Loading';

import { setID } from '../../../actions/collections-data';

class Card extends React.Component {
  state = {
    side: false
  };

  edit = () => {
    const { id } = this.props.collection;

    this.props.history.push(`/Collections/Edit/${id}`);
  };

  view = () => {
    const { id } = this.props.collection;
    const { setID } = this.props;

    setID(id);
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
              position={{
                position: 'absolute',
                fontSize: '0.9 rem',
                left: 0
              }}
              icon={' font-size-1_2-rem'}
            />
          )}

          <button className="icon edit" onClick={this.edit}>
            {' '}
            <i className="fas fa-edit" />{' '}
          </button>
          <button className="icon" onClick={this.view}>
            {' '}
            <i className="fas fa-eye" />{' '}
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collection: object.isRequired,
  setID: func.isRequired,
  collectionIsLoading: bool.isRequired,
  idToLoad: string.isRequired
};

export default withRouter(
  connect(
    state => ({
      collectionIsLoading: state.view.collectionIsLoading,
      idToLoad: state.collectionsData.idToLoad
    }),
    { setID }
  )(Fade(Card))
);
