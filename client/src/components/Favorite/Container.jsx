import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';
import { bool, array } from 'prop-types';

import Loading from '../Animation/Loading';
import Notes from './Notes';
import Collections from './Collections';

class Container extends React.Component {
  state = {
    option: 0
  }

  flip = (option) => this.setState({ option });

  render() {
    const { option } = this.state;
    const { notes, collections, notesLoaded, collectionsLoaded } = this.props;

    return (
      <div className="FavoriteContainer">
        <ButtonGroup className="Buttons">
          <Button className="Button" color="primary" onClick={() => this.flip(0)} active={option === 0} > Notes </Button>
          <Button className="Button" color="primary" onClick={() => this.flip(1)} active={option === 1} > Collections </Button>
        </ButtonGroup>

        {(option === 0) && !notesLoaded && <Loading />}
        {(option === 1) && !collectionsLoaded && <Loading />}

        <div className="Cards">
          {(option === 0) && notesLoaded && <Notes notes={notes} />}
          {(option === 1) && collectionsLoaded && <Collections collections={collections} />}
        </div>

      </div>
    );
  }
}

Container.propTypes = {
  notesLoaded: bool.isRequired,
  collectionsLoaded: bool.isRequired,
  notes: array.isRequired,
  collections: array.isRequired
}

export default connect(
  (state) => ({
    notes: state.notesData.notes,
    collections: state.collectionsData.collections,
    notesLoaded: state.favorite.notesLoaded,
    collectionsLoaded: state.favorite.collectionsLoaded
  })
)(Container);