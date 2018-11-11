import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { func, bool, string } from 'prop-types';

import ViewUI from './ViewUI';

import { loadCollection } from '../../../actions/collections-operations';
import { viewCollectionEnter, viewCollectionExit, importCollection } from '../../../actions/view';

class View extends React.Component {
  componentDidUpdate(prevProps) {
    const { idToLoad: prevID } = prevProps;
    const { idToLoad: curID } = this.props;
    const {
      loadCollectionConnect,
      viewCollectionEnterConnect,
      viewCollectionExitConnect,
      importCollectionConnect
    } = this.props;

    if (prevID && !curID) viewCollectionExitConnect();

    if (!prevID && curID) {
      importCollectionConnect(curID)
        .then(collection => {
          loadCollectionConnect(collection);
          viewCollectionEnterConnect();
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

View.propTypes = {
  loadCollectionConnect: func.isRequired,
  viewCollectionEnterConnect: func.isRequired,
  viewCollectionExitConnect: func.isRequired,
  importCollectionConnect: func.isRequired,
  viewCollection: bool.isRequired,
  idToLoad: string.isRequired
};

export default connect(
  state => ({
    idToLoad: state.collectionsData.idToLoad,
    viewCollection: state.view.viewCollection
  }),
  {
    loadCollectionConnect: loadCollection,
    viewCollectionEnterConnect: viewCollectionEnter,
    viewCollectionExitConnect: viewCollectionExit,
    importCollectionConnect: importCollection
  }
)(View);
