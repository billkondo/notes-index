
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { func } from 'prop-types';

import Loading from '../../Animation/Loading';
import Functions from './Functions';
import Container from './Container';

import { loadCollections } from '../../../actions/collections-data';

class Menu extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    const { loadCollections } = this.props;

    loadCollections([]);
    
    axios
      .get('/api/collections')
      .then(res => {
        const collections = res.data;
        loadCollections(collections);
        this.setState({ loaded: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="collections-menu">
        <div className="collections-title"> <i className="fas fa-box large-font" /> COLLECTIONS </div>
        <Functions />

        { !loaded && <Loading /> }
        { loaded && <Container /> }
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