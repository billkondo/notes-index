import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';
import { func } from 'prop-types';

import styled from 'styled-components';
import { smallFont, extraSmallFont } from '../../styles/defaultStyles';

import DropdownCustom from './Dropdown';
import Fade from '../High_Order/Fade';
import Action from '../High_Order/Action';

const StyledIcon = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  color: white;
  font-size: ${smallFont};
  grid-gap: 0.5rem;

  @media (max-width: 700px) {
    font-size: ${extraSmallFont};
  }
`;

class Add extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { addNote, addCollection } = this.props;

    return (
      <Dropdown isOpen={isOpen} toggle={this.toggle}>
        <DropdownToggle color="primary">
          <StyledIcon>
            <i className="fas fa-plus" />
            <i className="fas fa-caret-down" />
          </StyledIcon>
        </DropdownToggle>

        <DropdownCustom close={this.close} items={[addNote(), addCollection()]} />
      </Dropdown>
    );
  }
}

Add.propTypes = {
  addNote: func.isRequired,
  addCollection: func.isRequired
};

export default Action(Fade(Add));
