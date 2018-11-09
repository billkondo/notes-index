import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { func, shape } from 'prop-types';

import { submitNote } from '../../../actions/notes-operations';

class Submit extends React.Component {
  state = {
    isLoading: false
  };

  updateURL = () => {
    const { history } = this.props;

    history.push('/Notes');
  };

  onClick = () => {
    const { submitNote: submit } = this.props;

    this.setState({ isLoading: true });
    submit(this.updateURL);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="notes-utils-submit">
        <Button color="success" className="submit" onClick={this.onClick} disabled={isLoading}>
          Done
        </Button>
      </div>
    );
  }
}

Submit.propTypes = {
  submitNote: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
};

export default withRouter(
  connect(
    null,
    { submitNote }
  )(Submit)
);
