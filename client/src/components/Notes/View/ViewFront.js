import React from 'react';
import propTypes from 'prop-types';

import Header from './Header';
import Description from './Description';
import Commentaries from './Commentaries';
import Footer from './Footer';

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

export default ViewFront;