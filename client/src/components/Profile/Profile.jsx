import React from 'react';

import Info from './Info/Info';
import Delete from './Delete';

/*
  Component with user Info. User can:
    - change the account name
    - delete account
    ? - send messages
*/

class Profile extends React.Component {
  render() {
    return (
      <div className="ProfilePage">
        <Info />
        <Delete />
      </div>
    );
  }
}

export default Profile;
