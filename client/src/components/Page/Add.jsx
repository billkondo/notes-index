import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

import DropdownCustom from './Dropdown';
import Fade from '../High_Order/Fade';
import Action from '../High_Order/Action';

class Add extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { addNote, addCollection, addFavorite } = this.props;

    return (
      <Dropdown id="page-add" isOpen={isOpen} toggle={this.toggle}>
        <DropdownToggle color="primary">
          <div className="page-icons">
            <i className="fas fa-plus" />
            <i className="fas fa-caret-down page-down" />
          </div>
        </DropdownToggle>

        <DropdownCustom close={this.close} items={[addNote(), addCollection()]} />
      </Dropdown>
    );
  }
}

export default Action(Fade(Add));
