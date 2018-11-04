import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'reactstrap';
import isEqual from 'lodash/isEqual';
import decode from 'jsonwebtoken/decode';

import Name from './Name';

import setHeader from '../../../authentication/setHeader';
import { setUser } from '../../../actions/authentication';

class Info extends React.Component {
  state = {
    user: {}, 
    userInfo: {}
  }

  onChangeName = (e) => {
    const { userInfo } = this.state;

    const newUser = {
      ...userInfo,
      name: e.target.value
    }

    this.setState({ userInfo: newUser });
  }

  onSubmit = () => {
    const { userInfo } = this.state;

    axios
      .put('/api/user/update', userInfo)
      .then(res => {
        const { setUser } = this.props;
        const token = res.data.token;
        
        setHeader(token);
        localStorage.setItem('jwtToken', token);
        setUser(decode(token));  
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    const { user } = this.props;

    this.setState({ user, userInfo: user });
  }

  render() {
    const { userInfo, user } = this.state;

    return (
      <div className="ProfileInfo">
        <div className="InfoTitle"> <span className="UserName"> @ {user.username}</span> </div>
        <Name name={userInfo.name} onChangeName={this.onChangeName} />
        <Button 
          className="Submit" 
          color="success" 
          disabled={isEqual(user, userInfo)}
          onClick={this.onSubmit}
        >
          Save Changes
        </Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.authentication.user
  }), 
  { setUser }
)(Info);