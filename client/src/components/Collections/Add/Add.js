import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';
import Title from '../Utils/Title';

class Add extends React.Component {
  state = {
    title: ""
  }

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    const { render } = this.props;
    const { title } = this.state;
   
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
          <Title title={title} onChange={this.onChange} />
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