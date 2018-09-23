import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';

import { loadNotes } from '../../../actions/notes-data';
import { endFilter } from '../../../actions/notes-router';
import { loadNote } from '../../../actions/notes-operations';

class Menu extends React.Component {
  componentWillMount() {
    const { endFilter, loadNotes } = this.props;

    endFilter();

    axios
      .get('/api/notes')
      .then(res => loadNotes(res.data))
      .catch(err => console.log(err));
  }

  transition = (to, id) => {
    const { loadNote } = this.props;

    axios 
      .get(`/api/notes/${id}`)
      .then(note => {
        loadNote(note.data);
        this.props.history.push(to);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="notes-menu">
          <div className="notes-title"><i className="fas fa-sticky-note large-font" /> Notes </div>
          <ContainerFunctions />
          <ContainerNotes transition={this.transition}/>
      </div>
    );
  }
}

Menu.propTypes = {
  endFilter: propTypes.func.isRequired
}

export default connect(
  null,
  { loadNotes, endFilter, loadNote }
)(Menu);