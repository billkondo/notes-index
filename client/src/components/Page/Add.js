import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

import DropdownCustom from './Dropdown';

import { addNote, addCollection, addFavorite } from './dropdown-actions';

class Add extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown id="page-add" isOpen={isOpen} toggle={this.toggle}>
        <DropdownToggle className="page-icons">
          <i className="fas fa-plus" />
          <i className="fas fa-caret-down page-down" />
        </DropdownToggle>

        <DropdownCustom 
          items={[addNote, addCollection, addFavorite]}
        />
      </Dropdown>
    );
  }
}

export default Add;