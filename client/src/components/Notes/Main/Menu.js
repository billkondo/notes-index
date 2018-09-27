import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';

import Functions from './Functions';
import ContainerNotes from './ContainerNotes';
import Filter from './Filter';

import { loadNotes, filterOff } from '../../../actions/notes-data';
import { loadNote } from '../../../actions/notes-operations';

class Menu extends React.Component {
  componentWillMount() {
    const { filterOff, loadNotes } = this.props;
    
    filterOff();

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
        <Filter />
        <ContainerNotes transition={this.transition} />
      </div>
    );
  }
}

Menu.propTypes = {
  filterOff: propTypes.func.isRequired
}

export default connect(
  null,
  { loadNotes, filterOff, loadNote }
)(Menu);