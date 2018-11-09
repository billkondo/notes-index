import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import Loading from '../../Animation/Loading';
import EditUI from './EditUI';

import { loadCollection, resetCollection } from '../../../actions/collections-operations';
import {
  startLoadingNotes,
  startLoadingCollections,
  resetSearchMenu,
  loadNotesToDelete
} from '../../../actions/search-menu';
import { collectionIsLoaded, resetEdit } from '../../../actions/edit';

class Edit extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    const {
      loadCollection,
      startLoadingCollections,
      startLoadingNotes,
      resetSearchMenu,
      loadNotesToDelete,
      resetEdit,
      collectionIsLoaded
    } = this.props;

    resetEdit();
    resetSearchMenu();

    axios.get(`/api/collections/${id}`).then(res => {
      const collection = res.data;
      loadCollection(collection);
      loadNotesToDelete(collection.children);

      startLoadingNotes();
      startLoadingCollections();

      collectionIsLoaded();
    });
  }

  componentWillUnmount() {
    const { resetCollection } = this.props;
    resetCollection();
  }

  render() {
    const { isCollectionLoaded } = this.props;

    if (!isCollectionLoaded) return <Loading />;

    return <EditUI />;
  }
}

export default connect(
  state => ({
    isCollectionLoaded: state.edit.isCollectionLoaded
  }),
  {
    loadCollection,
    resetCollection,
    startLoadingCollections,
    startLoadingNotes,
    resetSearchMenu,
    loadNotesToDelete,
    collectionIsLoaded,
    resetEdit
  }
)(Edit);
