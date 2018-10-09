import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { func, bool } from 'prop-types';

import SearchUI from './SearchUI';

import { exitSearchMenu } from '../../../actions/modal';
import { loadNotes } from '../../../actions/notes-data';

class Search extends React.Component {
  state = {
    loadedNotes: false, 
    loadedCollections: false
  }

  componentWillMount() {
    const { loadNotes } = this.props;

    axios
      .get('/api/notes')
      .then(res => {
        const notes = res.data;
        loadNotes(notes);
        this.setState({ loadedNotes: true });
      })
  }
  
  render() {
    const { loadedNotes } = this.state;
    const { searchRender, exitSearchMenu } = this.props;

    if (!loadedNotes) return null;

    return <SearchUI shouldRender={searchRender} exitSearchMenu={exitSearchMenu} />
  }
}

Search.propTypes = {
  searchRender: bool.isRequired, 
  loadNotes: func.isRequired, 
  exitSearchMenu: func.isRequired
}

export default connect(
  (state) => ({
    searchRender: state.modal.searchRender
  }), 
  { loadNotes, exitSearchMenu }
)(Search);