import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import SearchUI from './SearchUI';

const Search = ({ searchRender }) => (
  <CSSTransition
    in={searchRender}
    mountOnEnter
    unmountOnExit
    timeout={{
      enter: 800,
      exit: 500,
      appear: 800
    }}
    classNames={{
      enter: 'animated',
      exit: 'animated',
      appear: 'animated',
      enterActive: 'fadeIn fast',
      exitActive: 'fadeOut faster',
      appearActive: 'fadeIn fast'
    }}
  >
    <SearchUI shouldRender={searchRender} />
  </CSSTransition>
);

Search.propTypes = {
  searchRender: bool.isRequired
};

export default connect(state => ({
  searchRender: state.searchMenu.searchRender
}))(Search);
