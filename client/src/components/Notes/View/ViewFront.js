import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';

const ViewFront = ({ flipSide, flipped }) => (
  <CSSTransition
    in={flipped}
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames={{
      enter: "animated", 
      exit: "animated",
    }}
    exit={false}
    enter={false}
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
  flipSide: propTypes.func.isRequired,
  flipped: propTypes.bool.isRequired
}

export default ViewFront;