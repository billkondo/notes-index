import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { func, bool } from 'prop-types';

import { submitCollection } from '../../../actions/collections-operations';

class Submit extends React.Component {
  state = {
    isLoading: false
  }
  
  updateURL = () => this.props.history.push('/Collections');
  
  onClick = () => {
    const { submitCollection } = this.props;
    
    this.setState({ isLoading: true });
    submitCollection(this.updateURL);
  }

  render() {
    const { isLoading } = this.state;
  
    return (
      <div className="collections-submit">
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

Submit.propTypes = {
  submitCollection: func.isRequired
}

export default withRouter(connect(
  null, 
  { submitCollection }
)(Submit));