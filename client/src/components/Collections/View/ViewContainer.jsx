import React from 'react';
import { connect } from 'react-redux';

import { func, bool } from 'prop-types';
import { matchObject, collectionObject } from '../../../propTypes/propTypes';

import ViewComponent from './ViewComponent';
import Loading from '../../Animation/Loading';

import { collectionsViewOperations as operations } from './duck';

class ViewContainer extends React.Component {
  componentWillMount() {
    const { fetchCollection, match } = this.props;
    const { id } = match.params;

    fetchCollection(id);
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  render() {
    const { collection, isFetching } = this.props;

    return (
      <React.Fragment>
        {isFetching && <Loading />}
        {!isFetching && <ViewComponent collection={collection} />}
      </React.Fragment>
    );
  }
}

ViewContainer.propTypes = {
  reset: func.isRequired,
  fetchCollection: func.isRequired,
  match: matchObject.isRequired,
  collection: collectionObject.isRequired,
  isFetching: bool.isRequired
};

export default connect(
  state => ({
    collection: state.collectionsView.collection,
    isFetching: state.collectionsView.isFetching
  }),
  {
    reset: operations.reset,
    fetchCollection: operations.fetchCollection
  }
)(ViewContainer);
