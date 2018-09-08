import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';

import ContainerFunctions from './ContainerFunctions';
import ContainerNotes from './ContainerNotes';

import { loadNotes } from '../../../actions/notes-data';
import { endFilter } from '../../../actions/notes-router';

class Menu extends React.Component {
  componentWillMount() {
    const { endFilter, loadNotes } = this.props;

    endFilter();

    axios
      .get('/api/notes')
      .then(res => loadNotes(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="notes-menu">
        <div className="notes-title"> Notes </div>
        <ContainerFunctions />
        <ContainerNotes />
      </div>
    );
  }
}

Menu.propTypes = {
  endFilter: propTypes.func.isRequired
}

export default connect(
  null,
  { loadNotes, endFilter }
)(Menu);