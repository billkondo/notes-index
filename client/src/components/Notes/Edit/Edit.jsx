import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { func, bool } from 'prop-types';

import Loading from '../../Animation/Loading';
import EditUI from './EditUI';

import { loadNote, resetNote } from '../../../actions/notes-operations';
import { notesIsLoaded, resetEdit } from '../../../actions/edit';

import { matchObject } from '../../../propTypes/propTypes';

class Edit extends React.Component {
  componentWillMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { loadNote: load, notesIsLoaded: finish, resetEdit: reset } = this.props;

    reset();

    axios
      .get(`/api/notes/${id}`)
      .then(res => {
        load(res.data);
        finish();
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    const { resetNote: reset } = this.props;
    reset();
  }

  render() {
    const { isNoteLoaded } = this.props;

    if (!isNoteLoaded) return <Loading />;

    return <EditUI />;
  }
}

Edit.propTypes = {
  resetNote: func.isRequired,
  isNoteLoaded: bool.isRequired,
  loadNote: func.isRequired,
  notesIsLoaded: func.isRequired,
  resetEdit: func.isRequired,
  match: matchObject.isRequired
};

export default connect(
  state => ({
    isNoteLoaded: state.edit.isNoteLoaded
  }),
  { loadNote, resetNote, notesIsLoaded, resetEdit }
)(Edit);
