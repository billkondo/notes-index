import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import { exitView, deleteNote } from '../../actions/notes-menu';

const FooterViewPresent = (props) => (
  <div id="footer-view">
    <Button color="secondary" id="tagsButton"> Tags </Button>
    <i className="fas fa-trash-alt" id="trash" onClick={() => props.deleteNote(props._id)} />
  </div>
);

const FooterView = connect(
  (state) => ({
    _id: state.viewNote.note._id
  }),
  (dispatch) => ({
    deleteNote: (_id) => {
      const deleteNotePromise = (_id) => new Promise((resolve, reject) => {
        dispatch(deleteNote(_id));
        resolve(true);
      });

      axios.delete(`/api/notes/${_id}`)
        .then(() => {
          deleteNotePromise(_id).then(() => dispatch(exitView()));
        })
        .catch(err => console.log(err))
    }
  })
)(FooterViewPresent);

export default FooterView;