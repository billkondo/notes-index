import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { bool } from 'prop-types';

import FilterUI from './FilterUI';

class Filter extends React.Component {
  render() {
    const { render } = this.props;

    return (
      <CSSTransition
        in={render}
        timeout={500}
        classNames={{
          enter: "animated", 
          exit: "animated", 
          enterActive: "fadeIn faster", 
          exitActive: "fadeOut faster"
        }}
        mountOnEnter
        unmountOnExit
      >
        <FilterUI />
      </CSSTransition>
    );
  }
}

Filter.propTypes = {
  render: bool.isRequired
}

export default connect(
  (state) => ({
    render: state.modal.filterRender
  })
)(Filter);