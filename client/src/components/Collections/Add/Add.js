import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Header from '../Utils/Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';
import Submit from './Submit';

import { resetCollection } from '../../../actions/collections-operations';

class Add extends React.Component {
  componentWillMount() {
    const { resetCollection } = this.props;
    resetCollection();
  }

  componentWillUnmount() {
    const { resetCollection } = this.props;
    resetCollection();
  }

  render() {
    return (
      <div className="collections-add-page">
        <div className="collections-add">
          <Header title="Add Collection" />
          <Title />
          <Description />
          <Tags />
          <Children />
          <Submit />
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  resetCollection: func.isRequired
}

export default connect(
  null, 
  { resetCollection }
)(Add);