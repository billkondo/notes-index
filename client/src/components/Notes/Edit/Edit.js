import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Title from '../Operations/Title';
import Description from '../Operations/Description';
import Commentaries from '../Operations/Commentaries';
import Tags from '../Operations/Tags';
import Footer from './Footer';

import { CSSTransition } from 'react-transition-group';

const EditUI = ({ cssTransition }) => (
  <CSSTransition
    in={cssTransition}
    timeout={{
      appear: 800, 
      exit: 500
    }}
    classNames={{
      appear: "animated",
      appearActive: "zoomIn fast", 
      exit: "animated",
      exitActive: "fadeOut faster"
    }}
    appear={true}
  >
    <div id="edit-page">
      <div id="edit-note">
        <Header />
        <Title />
        <Description />
        <Commentaries />
        <Tags />
        <Footer />
      </div>
    </div>
  </CSSTransition>
);


const Edit = connect(
  (state) => ({
    cssTransition: state.cssTransitions.notesEdit
  })
)(EditUI);

export default Edit;