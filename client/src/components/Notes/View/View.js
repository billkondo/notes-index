import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { string } from 'prop-types';

import ViewUI from './ViewUI';

import { loadNote } from '../../../actions/notes-operations';

class View extends React.Component {
  state = {
    isLoaded: false
  }

  componentDidUpdate(prevProps) {
    const prevID = prevProps.idToLoad;
    const curID = this.props.idToLoad;
    const { loadNote } = this.props;

    if (prevID && !curID) this.setState({ isLoaded: false });

    if (!prevID && curID) {
      axios
        .get(`/api/notes/${curID}`)
        .then(res => {
          const note = res.data;
          loadNote(note);
          this.setState({ isLoaded: true });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <CSSTransition
        in={isLoaded}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={{
          enter: "animated", 
          exit: "animated", 
          enterActive: "fadeIn faster",
          exitActive: "fadeOut faster"
        }}
      >
        <ViewUI />
      </CSSTransition>
    );
  }
}

View.propTypes = {
  idToLoad: string.isRequired
}

export default connect(
  (state) => ({
    idToLoad: state.notesData.idToLoad
  }),
  { loadNote }
)(View);