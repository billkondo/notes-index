import React from 'react';
import DropdownCustom from './Dropdown';
import { Dropdown, DropdownToggle } from 'reactstrap';

import { profile, notes, collections, favorites, logOut } from './dropdown-actions';

class Profile extends React.Component {  
  state = {
    isOpen: false
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown id="page-profile" isOpen={isOpen} toggle={this.toggle} > 
        <DropdownToggle className="page-icons">
          <i className="fas fa-square-full" />
          <i className="fas fa-caret-down page-down" />
        </DropdownToggle>

        <DropdownCustom 
          items={[profile, notes, collections, favorites, logOut]}
        />
      </Dropdown>
    );
  }
}

export default Profile;