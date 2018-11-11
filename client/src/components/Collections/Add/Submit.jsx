import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { func } from 'prop-types';

import { submitCollection } from '../../../actions/collections-operations';

import { historyObject } from '../../../propTypes/propTypes';

class Submit extends React.Component {
  state = {
    isLoading: false
  };

  updateURL = () => {
    const { history } = this.props;

    history.push('/Collections');
  };

  onClick = () => {
    const { submitCollectionConnect } = this.props;

    this.setState({ isLoading: true });
    submitCollectionConnect(this.updateURL);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="collections-submit">
        <Button color="success" className="submit" onClick={this.onClick} disabled={isLoading}>
          Done
        </Button>
      </div>
    );
  }
}

Submit.propTypes = {
  submitCollectionConnect: func.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    null,
    { submitCollectionConnect: submitCollection }
  )(Submit)
);
