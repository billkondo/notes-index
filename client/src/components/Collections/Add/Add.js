import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import Header from './Header';
import Title from '../Utils/Title';
import Modal from '../../Modal/Modal';

import { transitionAddToMenu } from '../../../actions/collections-router';

class Add extends React.Component {
  state = {
    title: ""
  }

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    const { title } = this.state;
   
    return (
      <div className="collections-add-page">
        <div className="collections-add">
          <Header />
          <Title title={title} onChange={this.onChange} />
        </div>

        <Modal />
      </div>
    );
  }
}

Add.propTypes = {
  transitionAddToMenu: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    render: state.collectionsRouter.renderAdd
  }),
  { transitionAddToMenu }
)(Add);