import React from 'react';
import DropdownCustom from './Dropdown';
import { Dropdown, DropdownToggle } from 'reactstrap';

import Fade from '../High_Order/Fade';
import Action from '../High_Order/Action';

class Profile extends React.Component {  
  state = {
    isOpen: false
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { profile, notes, collections, favorites, logout } = this.props;

    return (
      <Dropdown id="page-profile" isOpen={isOpen} toggle={this.toggle} > 
        <DropdownToggle>
          <div className="page-icons">
            <i className="fas fa-square-full" />
            <i className="fas fa-caret-down page-down" />
          </div>
        </DropdownToggle>

        <DropdownCustom close={this.close}
          items={[profile(), notes(), collections(), favorites(), logout()]}
        />
      </Dropdown>
    );
  }
}

export default Action(Fade(Profile));