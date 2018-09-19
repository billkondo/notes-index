import React from 'react';
import DropdownCustom from './Dropdown';
import { Dropdown, DropdownToggle } from 'reactstrap';

import { profile, notes, collections, favorites } from './dropdown-actions';

class Profile extends React.Component {  
  state = {
    isOpen: false
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown id="page-profile" isOpen={isOpen} toggle={this.toggle} > 
        <DropdownToggle>
          <div className="page-icons">
            <i className="fas fa-square-full" />
            <i className="fas fa-caret-down page-down" />
          </div>
        </DropdownToggle>

        <DropdownCustom toggle={this.toggle}
          items={[profile, notes, collections, favorites, { label: "Log Out", onClick: this.props.logOut }]}
        />
      </Dropdown>
    );
  }
}

export default Profile;