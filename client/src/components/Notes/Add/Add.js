import React from 'react';

import Header from './Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Commentaries from '../Utils/Commentaries';
import Tags from '../Utils/Tags';
import Submit from './Submit';

const Add = () => (
  <div className="notes-add-page">
    <div className="notes-add">
      <Header />
      <Title />
      <Description />
      <Commentaries />
      <Tags />
      <Submit />
    </div>
  </div>
);

export default Add;