import React from 'react';
import propTypes from 'prop-types';

// import { exitView, deleteNote } from '../../../actions/notes-menu';

// state = {
//   open: true
// }

// prepareToDelete = () => {
//   if (!this.state.open)
//     return;

//   this.setState({ open: false });

//   axios
//     .delete(`/api/notes/${this.props._id}`)
//     .then(() => {
//       this.props.delete(this.props._id);
//       this.props.exit();
//     })
//     .catch(err => console.log(err));
// }


const Footer = ({ flipSide }) => (
  <div className="footer-view">
    <div className="flip-button" onClick={flipSide}> <i className="fas fa-undo" /> </div>
  </div>
);

Footer.propTypes = {
  flipSide: propTypes.func.isRequired
}


// const Footer = connect(
//   (state) => ({
//     _id: state.viewNote.note._id
//   }),
//   (dispatch) => ({
//     delete: (_id) => dispatch(deleteNote(_id)),
//     exit: () => dispatch(exitView())
//   })
// )(FooterUI);

export default Footer;