import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { arrayOf, object } from 'prop-types';

import Card from './Card';

const Container = ({ notes }) => (
  <TransitionGroup id="container-notes">
    {
      notes.map(value =>
        <CSSTransition
          key={value.id}
          timeout={500}
          classNames={{
            enter: "animated",
            enterActive: "fadeIn faster"
          }}
          exit={false}
        > 
          <Card key={value.id} note={value} />
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

Container.propTypes = {
  notes: arrayOf(object)
}

export default connect(
  (state) => ({
    notes: state.notesData.notes
  })
)(Container)