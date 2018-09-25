import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';

import Functions from './Functions';
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

  transition = (to) => this.props.history.push(to);

  render() {
    return (
      <div className="notes-menu">
        <div className="notes-title"><i className="fas fa-sticky-note large-font" /> Notes </div>
        <Functions />
        <ContainerNotes transition={this.transition} />
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