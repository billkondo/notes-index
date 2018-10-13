import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import EditUI from './EditUI';

import { loadCollection, resetCollection } from '../../../actions/collections-operations';

class Edit extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const { loadCollection } = this.props;

    axios
      .get(`/api/collections/${id}`)
      .then(res => {
        const collection = res.data;
        loadCollection(collection);
        this.setState({ loaded: true });
      })
  }

  componentWillUnmount() {
    const { resetCollection } = this.props;
    resetCollection();
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) 
      return null;

    return <EditUI />
  }
}

export default connect(
  null, 
  { loadCollection, resetCollection }
)(Edit);