import React from 'react';
import { connect } from 'react-redux';

import Functions from './Functions';
import Container from './Container';

import { loadNotes } from '../../actions/notes-data';
import { loadCollections } from '../../actions/collections-data';
import { resetFavorite, loadFavoriteCollections, loadFavoriteNotes } from '../../actions/favorite';
import {
  loadCollectionsToDelete,
  loadNotesToDelete,
  startLoadingNotes,
  startLoadingCollections
} from '../../actions/search-menu';

class Favorite extends React.Component {
  componentWillMount() {
    const {
      loadFavoriteCollections,
      loadFavoriteNotes,
      loadNotes,
      loadCollections,
      resetFavorite,
      loadCollectionsToDelete,
      loadNotesToDelete,
      startLoadingCollections,
      startLoadingNotes
    } = this.props;

    resetFavorite();
    loadNotes([]);
    loadCollections([]);

    loadFavoriteCollections()
      .then(collections => {
        // loadCollectionsToDelete(collections);
        // startLoadingCollections();
      })
      .catch(error => console.log(error));

    loadFavoriteNotes()
      .then(notes => {
        // loadNotesToDelete(notes);
        // startLoadingNotes();
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    const { resetFavorite } = this.props;

    resetFavorite();
  }

  render() {
    return (
      <div className="FavoritePage">
        <div className="Title">
          <i className="fas fa-star" />
          <span>FAVORITE</span>
        </div>
        {/* <Functions /> */}
        <Container />
      </div>
    );
  }
}

export default connect(
  null,
  {
    loadNotes,
    loadCollections,
    resetFavorite,
    loadFavoriteCollections,
    loadFavoriteNotes,
    loadCollectionsToDelete,
    loadNotesToDelete,
    startLoadingCollections,
    startLoadingNotes
  }
)(Favorite);
