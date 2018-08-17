import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import Tag from './Tag';
import Footer from './Footer';

const ViewBackUI = ({ tags, flipSide, flipped }) => (
  <CSSTransition
    in={flipped}
    timeout={800}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames={{
      enter: "animated", 
      exit: "animated",
      exitActive: "flipOutY fast"
    }}
  >
    <div className="view-note">
      <Header />

      <div id="tags-view">
        {
          tags.map((value, index) => {
            return (
              <Tag key={index} tag={value} />
            );
          })
        }
      </div>

      <Footer flipSide={flipSide} />
    </div>
  </CSSTransition>
);

ViewBackUI.propTypes = {
  tags: propTypes.array,
  flipped: propTypes.bool.isRequired, 
  flipSide: propTypes.func.isRequired
}

const ViewBack = connect(
  (state) => ({
    tags: state.viewNote.note.tags
  })
)(ViewBackUI);

export default ViewBack;