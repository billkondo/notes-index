import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Header from './Header';
import Tags from './Tags';
import Footer from './Footer';

const ViewBack = ({ flipSide }) => (
  <div className="view-note">
    <Header />
    <Tags />
    <Footer flipSide={flipSide} />
  </div>
);

ViewBack.propTypes = {
  flipSide: propTypes.func.isRequired
}

export default ViewBack;