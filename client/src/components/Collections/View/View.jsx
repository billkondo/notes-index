import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ViewUI from './ViewUI';

import { loadCollection } from '../../../actions/collections-operations';
import { viewCollectionEnter, viewCollectionExit, importCollection } from '../../../actions/view';

class View extends React.Component {
  componentDidUpdate(prevProps) {
    const prevID = prevProps.idToLoad;
    const curID = this.props.idToLoad;
    const {
      loadCollection,
      viewCollectionEnter,
      viewCollectionExit,
      importCollection
    } = this.props;

    if (prevID && !curID) viewCollectionExit();

    if (!prevID && curID) {
      importCollection(curID)
        .then(collection => {
          loadCollection(collection);
          viewCollectionEnter();
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { viewCollection } = this.props;

    return (
      <CSSTransition
        in={viewCollection}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={{
          enter: 'animated',
          exit: 'animated',
          enterActive: 'fadeIn faster',
          exitActive: 'fadeOut faster'
        }}
      >
        <ViewUI />
      </CSSTransition>
    );
  }
}

export default connect(
  state => ({
    idToLoad: state.collectionsData.idToLoad,
    viewCollection: state.view.viewCollection
  }),
  { loadCollection, viewCollectionEnter, viewCollectionExit, importCollection }
)(View);
