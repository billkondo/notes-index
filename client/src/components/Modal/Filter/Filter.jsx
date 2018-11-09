import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { bool } from 'prop-types';

import FilterNotes from './FilterNotes';
import FilterCollections from './FilterCollections';

const Filter = ({ shouldRenderFilter, filterMode }) => (
  <CSSTransition
    in={shouldRenderFilter}
    timeout={500}
    classNames={{
      enter: 'animated',
      exit: 'animated',
      enterActive: 'fadeIn faster',
      exitActive: 'fadeOut faster'
    }}
    mountOnEnter
    unmountOnExit
  >
    <React.Fragment>
      {!filterMode && <FilterNotes />}
      {filterMode && <FilterCollections />}
    </React.Fragment>
  </CSSTransition>
);

Filter.propTypes = {
  shouldRenderFilter: bool.isRequired,
  filterMode: bool.isRequired
};

export default connect(state => ({
  shouldRenderFilter: state.filter.shouldRenderFilter,
  filterMode: state.filter.filterMode
}))(Filter);
