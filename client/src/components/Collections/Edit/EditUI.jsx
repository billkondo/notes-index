import React from 'react';

import Header from '../Utils/Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';
import Footer from './Footer';

import Fade from '../../High_Order/Fade';

const EditUI = () => (
  <div className="collections-edit">
    <Header title="Edit Collection" />
    <Title />
    <Description />
    <Tags />
    <Children />
    <Footer />
  </div>
);

export default Fade(EditUI);
