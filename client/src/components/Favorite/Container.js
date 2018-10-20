import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CardNote from '../Notes/Main/Card';
import CardCollection from '../Collections/Main/Card';

const ContainerNotes = ({ notes }) => (
  <TransitionGroup className="Cards">
    {
      notes.map(value => 
        <CSSTransition
          key={value.id}
          timeout={500}
          classNames={{
            appear: "animated",
            enter: "animated",
            appearActive: "fadeIn faster", 
            enterActive: "fadeIn faster"
          }}
          exit={false}
        >
          <CardNote key={value.id} note={value} />
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

const Collections = ({ collections }) => (
  <TransitionGroup className="Cards">
    {
      collections.map(value => 
        <CSSTransition
          key={value.id}
          timeout={500}
          classNames={{
            enter: "animated",
            enterActive: "fadeIn faster"
          }}
          exit={false}
        >
          <CardCollection key={value.id} collection={value} />
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

class Container extends React.Component {
  state = {
    option: 0
  }

  flip = (option) => this.setState({ option });  

  render() {
    const { option } = this.state;
    const { notes, collections } = this.props;
    
    return (
      <div className="FavoriteContainer">
        <ButtonGroup className="Buttons">
          <Button className="Button" color="primary" onClick={() => this.flip(0)} active={option === 0} > Notes </Button>
          <Button className="Button" color="primary" onClick={() => this.flip(1)} active={option === 1} > Collections </Button>
        </ButtonGroup>

        {(option === 0) && <ContainerNotes notes={notes} /> }
        {(option === 1) && <Collections collections={collections} />}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    notes: state.notesData.notes, 
    collections: state.collectionsData.collections
  })
)(Container);