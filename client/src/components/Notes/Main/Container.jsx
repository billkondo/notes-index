import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Fade from '../../High_Order/Fade';
import Card from './Card';

import { notesArray } from '../../../propTypes/propTypes';

const Container = ({ notes }) => (
  <TransitionGroup id="container-notes">
    {notes.map(value => (
      <CSSTransition
        key={value.id}
        timeout={500}
        classNames={{
          enter: 'animated',
          enterActive: 'fadeIn faster'
        }}
        exit={false}
      >
        <Card key={value.id} note={value} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Container.propTypes = {
  notes: notesArray.isRequired
};

export default connect(state => ({
  notes: state.notesData.notes
}))(Fade(Container));
