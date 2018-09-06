import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';
import Tags from './Tags';
import Footer from './Footer';

const ViewBack = ({ flipSide, flipped }) => (
  <CSSTransition
    in={flipped}
    mountOnEnter={true}
    unmountOnExit={true}
    timeout={1000}
    classNames={{
      enter: "animated", 
      exit: "animated",
    }}
    enter={false}
    exit={false}
  >
    <div className="view-note">
      <Header />
      <Tags />
      <Footer flipSide={flipSide} />
    </div>
  </CSSTransition>
);

ViewBack.propTypes = {
  flipSide: propTypes.func.isRequired,
  flipped: propTypes.bool.isRequired
}

export default ViewBack;