import React from 'react';

import Header from './Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';
import Submit from './Submit';

const Add = () => (
  <div className="collections-add-page">
    <div className="collections-add">
      <Header />
      <Title />
      <Description />
      <Tags />
      <Children />
      <Submit />
    </div>
  </div>
);

export default Add;