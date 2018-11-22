import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';
import { bool } from 'prop-types';

import Loading from '../Animation/Loading';
import Notes from './Notes';
import Collections from './Collections';

import { notesArray, collectionsArray } from '../../propTypes/propTypes';

class Container extends React.Component {
  state = {
    option: 0
  };

  flip = option => this.setState({ option });

  render() {
    const { option } = this.state;
    const { notes, collections, areNotesLoaded, areCollectionsLoaded } = this.props;

    return (
      <div className="FavoriteContainer">
        <ButtonGroup className="Buttons">
          <Button
            className="Button"
            color="primary"
            onClick={() => this.flip(0)}
            active={option === 0}
          >
            Notes
          </Button>
          <Button
            className="Button"
            color="primary"
            onClick={() => this.flip(1)}
            active={option === 1}
          >
            Collections
          </Button>
        </ButtonGroup>

        {option === 0 && !areNotesLoaded && <Loading />}
        {option === 1 && !areCollectionsLoaded && <Loading />}

        <div className="Cards">
          {option === 0 && areNotesLoaded && <Notes notes={notes} />}
          {option === 1 && areCollectionsLoaded && <Collections collections={collections} />}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  areNotesLoaded: bool.isRequired,
  areCollectionsLoaded: bool.isRequired,
  notes: notesArray.isRequired,
  collections: collectionsArray.isRequired
};

export default connect(state => ({
  notes: state.notesData.notes,
  collections: state.collectionsData.collections,
  areNotesLoaded: state.favorite.areNotesLoaded,
  areCollectionsLoaded: state.favorite.areCollectionsLoaded
}))(Container);
