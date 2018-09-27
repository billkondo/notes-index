import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';

import Fade from '../../High_Order/Fade';

const ViewFront = ({ flipSide }) => (
  <div className="view-note">
    <Header />
    <Description />
    <Commentaries />
    <Footer flipSide={flipSide} />
  </div>
);

ViewFront.propTypes = {
  flipSide: propTypes.func.isRequired
}

export default Fade(ViewFront);