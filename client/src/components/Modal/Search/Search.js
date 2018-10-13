import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import SearchUI from './SearchUI';

import { loadNotes } from '../../../actions/notes-data';
import { searchNotesLoad } from '../../../actions/modal';

class Search extends React.Component {
  componentDidUpdate() {
    const { searchNotesLoad, notesLoaded, loadNotes } = this.props;

    if (!notesLoaded) {
      axios
        .get('/api/notes')
        .then(res => {
          const notes = res.data;
          loadNotes(notes);
          searchNotesLoad();
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { searchRender, notesLoaded } = this.props;

    return (
      <CSSTransition
        in={searchRender && notesLoaded}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          enter: 800,
          exit: 500,
          appear: 800
        }}
        classNames={{
          enter: "animated", 
          exit: "animated", 
          appear: "animated",
          enterActive: "fadeIn fast",
          exitActive: "fadeOut faster",
          appearActive: "fadeIn fast"
        }}
      >
        <SearchUI shouldRender={searchRender} />
      </CSSTransition>
    );
  }
}

Search.propTypes = {
  searchRender: bool.isRequired,
  notesLoaded: bool.isRequired, 
  searchNotesLoad: func.isRequired, 
  loadNotes: func.isRequired
}

export default connect(
  (state) => ({
    searchRender: state.modal.searchRender,
    notesLoaded: state.modal.notesLoaded
  }),
  { searchNotesLoad, loadNotes }
)(Search);