import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

import DropdownCustom from './Dropdown';
import Fade from '../High_Order/Fade';

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
        <DropdownToggle>
          <div className="page-icons">
            <i className="fas fa-plus" />
            <i className="fas fa-caret-down page-down" />
          </div>
        </DropdownToggle>

        <DropdownCustom toggle={this.toggle}
          items={[addNote, addCollection, addFavorite]}
        />
      </Dropdown>
    );
  }
}

export default Fade(Add);