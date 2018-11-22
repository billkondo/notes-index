import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Container from './Container';

import { resetFavorite, loadFavoriteCollections, loadFavoriteNotes } from '../../actions/favorite';

class Favorite extends React.Component {
  componentWillMount() {
    const {
      loadFavoriteCollectionsDispatch,
      loadFavoriteNotesDispatch,
      resetFavoriteDispatch
    } = this.props;

    resetFavoriteDispatch();
    loadFavoriteCollectionsDispatch();
    loadFavoriteNotesDispatch();
  }

  componentWillUnmount() {
    const { resetFavoriteDispatch } = this.props;

    resetFavoriteDispatch();
  }

  render() {
    return (
      <div className="FavoritePage">
        <div className="Title">
          <i className="fas fa-star" />
          <span>FAVORITE</span>
        </div>
        <Container />
      </div>
    );
  }
}

Favorite.propTypes = {
  loadFavoriteNotesDispatch: func.isRequired,
  loadFavoriteCollectionsDispatch: func.isRequired,
  resetFavoriteDispatch: func.isRequired
};

export default connect(
  null,
  {
    resetFavoriteDispatch: resetFavorite,
    loadFavoriteCollectionsDispatch: loadFavoriteCollections,
    loadFavoriteNotesDispatch: loadFavoriteNotes
  }
)(Favorite);
