import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import { exitView, deleteNote } from '../../actions/notes-menu';

class FooterViewPresent extends React.Component {
  state = {
    open: true
  }

  prepareToDelete = () => {
    if (!this.state.open)
      return;

    this.setState({ open: false });

    axios
      .delete(`/api/notes/${this.props._id}`)
      .then(() => {
        this.props.delete(this.props._id);
        this.props.exit();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="footer-view">
        <Button color="secondary" id="tagsButton"> Tags </Button>
        <i className="fas fa-trash-alt" id="trash" onClick={this.prepareToDelete} />
      </div>
    );
  }
}

const FooterView = connect(
  (state) => ({
    _id: state.viewNote.note._id
  }),
  (dispatch) => ({
    delete: (_id) => dispatch(deleteNote(_id)),
    exit: () => dispatch(exitView())
  })
)(FooterViewPresent);

export default FooterView;