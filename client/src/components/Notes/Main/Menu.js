import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import axios from 'axios';

import Functions from './Functions';
import Container from './Container';

import { loadNotes } from '../../../actions/notes-data';

class Menu extends React.Component {
  componentWillMount() {
    const { loadNotes } = this.props;

    loadNotes([]);    

    axios
      .get('/api/notes')
      .then(res => loadNotes(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="notes-menu">
        <div className="notes-title"><i className="fas fa-sticky-note large-font" /> Notes </div>
        <Functions />
        <Container />
      </div>
    );
  }
}

Menu.propTypes = {
  loadNotes: func.isRequired
}

export default connect(
  null,
  { loadNotes }
)(Menu);