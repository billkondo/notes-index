import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Create from './Create/Create';
import View from './View/View';
import Edit from './Edit/Edit';
import Menu from './Main/Menu';

import { loadNotes } from '../../actions/notes-data';

class NotesRouter extends React.Component {
  componentDidMount() {
    axios
      .get('/api/notes')
      .then(res => this.props.loadNotes(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="notes-router">
        <Menu />
        <Create />
        <Edit />
        <View />
      </div>
    );
  }
}

NotesRouter.propTypes = {
  loadNotes: propTypes.func.isRequired
}

export default connect(
  null,
  (dispatch) => ({
    loadNotes: (notes) => dispatch(loadNotes(notes))
  })
)(NotesRouter)