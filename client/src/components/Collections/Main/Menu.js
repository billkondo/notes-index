import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { func } from 'prop-types';

import Functions from './Functions';

import { loadCollections } from '../../../actions/collections-data';

class Menu extends React.Component {
  componentWillMount() {
    const { loadCollections } = this.props;
    
    axios
      .get('/api/collections')
      .then(res => {
        loadCollections(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="collections-menu">
        <div className="collections-title"> <i className="fas fa-box large-font" /> Collections </div>
        <Functions />
      </div> 
    );
  }
}

Menu.propTypes = {
  loadCollections: func.isRequired
}

export default connect(
  null, 
  { loadCollections }
)(Menu);