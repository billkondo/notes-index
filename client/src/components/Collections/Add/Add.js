import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';

class Add extends React.Component {
  render() {
    const { render } = this.props;
   
    return (
      <CSSTransition
        in={render}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          enter: 800,
          exit: 500
        }}
        classNames={{
          enter: "animated", 
          enterActive: "fadeIn fast",
          exit: "animated",
          exitActive: "fadeOut faster"
        }}
      >
        <div className="collections-add">
          <Header />
        </div>
      </CSSTransition>
    );
  }
}

Add.propTypes = {
  render: propTypes.bool.isRequired
}

export default connect(
  (state) => ({
    render: state.collectionsRouter.renderAdd
  })
)(Add);