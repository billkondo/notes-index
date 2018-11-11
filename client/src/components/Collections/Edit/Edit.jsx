import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bool, func, shape, string } from 'prop-types';

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
    const { match } = this.props;
    const { id } = match.params;
    const {
      loadCollectionConenct,
      startLoadingCollectionsConnect,
      startLoadingNotesConnect,
      resetSearchMenuConnect,
      loadNotesToDeleteConnect,
      resetEditConnect,
      collectionIsLoadedConnect
    } = this.props;

    resetEditConnect();
    resetSearchMenuConnect();

    axios.get(`/api/collections/${id}`).then(res => {
      const collection = res.data;
      loadCollectionConenct(collection);
      loadNotesToDeleteConnect(collection.children);

      startLoadingNotesConnect();
      startLoadingCollectionsConnect();

      collectionIsLoadedConnect();
    });
  }

  componentWillUnmount() {
    const { resetCollectionConnect } = this.props;
    resetCollectionConnect();
  }

  render() {
    const { isCollectionLoaded } = this.props;

    if (!isCollectionLoaded) return <Loading />;

    return <EditUI />;
  }
}

Edit.propTypes = {
  isCollectionLoaded: bool.isRequired,
  resetCollectionConnect: func.isRequired,
  loadCollectionConenct: func.isRequired,
  startLoadingCollectionsConnect: func.isRequired,
  startLoadingNotesConnect: func.isRequired,
  resetSearchMenuConnect: func.isRequired,
  loadNotesToDeleteConnect: func.isRequired,
  resetEditConnect: func.isRequired,
  collectionIsLoadedConnect: func.isRequired,
  match: shape({
    params: shape({
      id: string.isRequired
    })
  }).isRequired
};

export default connect(
  state => ({
    isCollectionLoaded: state.edit.isCollectionLoaded
  }),
  {
    loadCollectionConenct: loadCollection,
    resetCollectionConnect: resetCollection,
    startLoadingCollectionsConnect: startLoadingCollections,
    startLoadingNotesConnect: startLoadingNotes,
    resetSearchMenuConnect: resetSearchMenu,
    loadNotesToDeleteConnect: loadNotesToDelete,
    collectionIsLoadedConnect: collectionIsLoaded,
    resetEditConnect: resetEdit
  }
)(Edit);
