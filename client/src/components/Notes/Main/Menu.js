import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import axios from 'axios';

import Loading from '../../Animation/Loading';
import Functions from './Functions';
import Container from './Container';

import { loadNotes } from '../../../actions/notes-data';

class Menu extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    const { loadNotes } = this.props;

    loadNotes([]);    

    axios
      .get('/api/notes')
      .then(res => {
        const notes = res.data;
        loadNotes(notes);
        this.setState({ loaded: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="notes-menu">
        <div className="notes-title"><i className="fas fa-sticky-note large-font" /> NOTES </div>
        <Functions />

        { !loaded && <Loading /> }
        { loaded && <Container /> }
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