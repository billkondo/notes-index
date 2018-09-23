import React from 'react';
import propTypes from 'prop-types';

import Header from './Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';

const Add = () => (
  <div className="collections-add-page">
    <div className="collections-add">
      <Header />
      <Title />
      <Description />
      <Tags />
      <Children />
    </div>
  </div>
);

export default Add;