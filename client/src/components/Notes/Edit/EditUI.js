import React from 'react';

import Header from './Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Commentaries from '../Utils/Commentaries';
import Tags from '../Utils/Tags';
import Footer from './Footer';

import Fade from '../../High_Order/Fade';

const EditUI = () => (
  <div className="notes-edit-page"> 
    <div className="notes-edit">
      <Header />
      <Title />
      <Description />
      <Commentaries />
      <Tags />
      <Footer />
    </div>
  </div>
);

export default Fade(EditUI);