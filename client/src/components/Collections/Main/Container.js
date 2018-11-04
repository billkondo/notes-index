import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Fade from '../../High_Order/Fade';
import Card from './Card';

const Container = ({ collections }) => (
  <TransitionGroup className="collections-main-container">
    { 
      collections.map(item => 
        <CSSTransition
          key={item.id}
          timeout={500}
          classNames={{
            enter: "animated",
            enterActive: "fadeIn faster"
          }}
          exit={false}
        >
          <Card collection={item} />
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

export default connect(
  (state) => ({
    collections: state.collectionsData.collections
  })
)(Fade(Container));