import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';

import SearchUI from './SearchUI';
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
    const { shouldRender, exitSearchMenu } = this.props;

    if (!loadedNotes) return null;

    return <SearchUI shouldRender={shouldRender} exitSearchMenu={exitSearchMenu} />
  }
}

Search.propTypes = {
  shouldRender: propTypes.bool.isRequired, 
  exitSearchMenu: propTypes.func.isRequired
}

export default connect(
  null, 
  { loadNotes }
)(Search);