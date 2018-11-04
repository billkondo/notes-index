import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { submitNote } from '../../../actions/notes-operations';

class Submit extends React.Component {
  state = {
    isLoading: false
  }

  updateURL = () => this.props.history.push('/Notes');

  onClick = () => {
    const { submitNote } = this.props;

    this.setState({ isLoading: true });
    submitNote(this.updateURL);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="notes-utils-submit">
        <Button 
          color="success" 
          className="submit" 
          onClick={this.onClick}
          disabled={isLoading}
        > 
          Done   
        </Button>
      </div>
    );
  }
}
export default withRouter(connect(
  null, 
  { submitNote }
)(Submit));