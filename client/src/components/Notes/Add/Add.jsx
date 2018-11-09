import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Header from '../Utils/Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Commentaries from '../Utils/Commentaries';
import Tags from '../Utils/Tags';
import Submit from './Submit';

import { resetNote } from '../../../actions/notes-operations';

class Add extends React.Component {
  componentWillMount() {
    const { resetNote: reset } = this.props;
    reset();
  }

  componentWillUnmount() {
    const { resetNote: reset } = this.props;
    reset();
  }

  render() {
    return (
      <div className="notes-add-page">
        <div className="notes-add">
          <Header title="ADD NOTE" />
          <Title />
          <Description />
          <Commentaries />
          <Tags />
          <Submit />
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  resetNote: func.isRequired
};

export default connect(
  null,
  { resetNote }
)(Add);
