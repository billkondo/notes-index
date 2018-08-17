import React from 'react';
import propTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';
 
const ViewFront = ({ flipSide, flipped }) => (
  <CSSTransition
    in={flipped}
    timeout={800}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames={{
      enter: "animated",
      exit: "animated",
      exitActive: "flipOutY fast"
    }}
  >
    <div className="view-note">
      <Header />
      <Description />
      <Commentaries />
      <Footer flipSide={flipSide} />
    </div>
  </CSSTransition>
);

ViewFront.propTypes = {
  flipped: propTypes.bool.isRequired, 
  flipSide: propTypes.func.isRequired
}

export default ViewFront;