import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Header from '../Utils/Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';
import Submit from './Submit';

import { resetCollection } from '../../../actions/collections-operations';
import {
  startLoadingNotes,
  startLoadingCollections,
  resetSearchMenu
} from '../../../actions/search-menu';

class Add extends React.Component {
  componentWillMount() {
    const {
      resetCollectionConnect,
      startLoadingCollectionsConnect,
      startLoadingNotesConnect,
      resetSearchMenuConnect
    } = this.props;

    resetCollectionConnect();
    resetSearchMenuConnect();
    startLoadingCollectionsConnect();
    startLoadingNotesConnect();
  }

  componentWillUnmount() {
    const { resetCollectionConnect } = this.props;
    resetCollectionConnect();
  }

  render() {
    return (
      <div className="collections-add-page">
        <div className="collections-add">
          <Header title="ADD COLLECTION" />
          <Title />
          <Description />
          <Tags />
          <Children />
          <Submit />
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  resetCollectionConnect: func.isRequired,
  resetSearchMenuConnect: func.isRequired,
  startLoadingCollectionsConnect: func.isRequired,
  startLoadingNotesConnect: func.isRequired
};

export default connect(
  null,
  {
    resetCollectionConnect: resetCollection,
    startLoadingNotesConnect: startLoadingNotes,
    startLoadingCollectionsConnect: startLoadingCollections,
    resetSearchMenuConnect: resetSearchMenu
  }
)(Add);
