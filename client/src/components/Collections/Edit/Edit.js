import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import EditUI from './EditUI';

import { loadCollection, resetCollection } from '../../../actions/collections-operations';
import { startLoadingNotes, startLoadingCollections, resetSearchMenu, loadNotesToDelete } from '../../../actions/search-menu';

class Edit extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const { loadCollection, startLoadingCollections, startLoadingNotes, resetSearchMenu, loadNotesToDelete } = this.props;

    resetSearchMenu();
    
    axios
    .get(`/api/collections/${id}`)
    .then(res => {
      const collection = res.data;
      loadCollection(collection);
      loadNotesToDelete(collection.children);
      
      startLoadingNotes();
      startLoadingCollections();
      
      this.setState({ loaded: true });
    })
  }

  componentWillUnmount() {
    const { resetCollection } = this.props;
    resetCollection();
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) 
      return null;

    return <EditUI />
  }
}

export default connect(
  null, 
  { loadCollection, resetCollection, startLoadingCollections, startLoadingNotes, resetSearchMenu, loadNotesToDelete }
)(Edit);