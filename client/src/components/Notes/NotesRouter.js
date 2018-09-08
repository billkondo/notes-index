import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Header from '../Page/Header';
import Create from './Create/Create';
import View from './View/View';
import Edit from './Edit/Edit';
import Menu from './Main/Menu';

import { loadNotes } from '../../actions/notes-data';

class NotesRouter extends React.Component {
  componentDidMount() {
    const { loadNotes } = this.props;

    axios
      .get('/api/notes')
      .then(res => loadNotes(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="app">
        <Header />

        <div id="app-body">
          <div className="notes-router">
            <Menu />
            <Create />
            <Edit />
            <View />
          </div>
        </div>
      </div>
    );
  }
}

NotesRouter.propTypes = {
  loadNotes: propTypes.func.isRequired
}

export default connect(
  null,
  { loadNotes }
)(NotesRouter)