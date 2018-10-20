import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import ViewUI from './ViewUI';

import { loadCollection } from '../../../actions/collections-operations';

class View extends React.Component {
  state = {
    isLoaded: false
  }

  componentDidUpdate(prevProps) {
    const prevID = prevProps.idToLoad;
    const curID = this.props.idToLoad;
    const { loadCollection } = this.props;

    if (prevID && !curID) this.setState({ isLoaded: false });

    if (!prevID && curID) {
      axios
        .get(`/api/collections/${curID}`)
        .then(res => {
          const note = res.data;
          loadCollection(note);
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

export default connect(
  (state) => ({
    idToLoad: state.collectionsData.idToLoad
  }),
  { loadCollection }
)(View);