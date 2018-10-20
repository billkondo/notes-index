import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Container from './Container';

import { loadNotes } from '../../actions/notes-data';
import { loadCollections } from '../../actions/collections-data';

class Favorite extends React.Component {
  componentWillMount() {
    const { loadNotes, loadCollections } = this.props;

    loadNotes([]);
    loadCollections([]);

    axios
      .get('/api/notes/favorite')
      .then(res => {
        const notes = res.data.notes;
        loadNotes(notes);
      });

    axios
      .get('/api/collections/favorite')
      .then(res => {
        const collections = res.data.collections;
        loadCollections(collections);
      });
  }

  render() {
    return (
      <div className="FavoritePage">
        <div className="Title"> <i className="fas fa-star" /> Favorite </div>
        <Container />
      </div>
    );
  }
}

export default connect(
  null, 
  { loadNotes, loadCollections }
)(Favorite);