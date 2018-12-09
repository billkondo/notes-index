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
  grid-gap: 0.5rem;
  font-size: ${smallFont};

  @media (max-width: 700px) {
    font-size: ${extraSmallFont};
  }
`;

class Profile extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { getStarted, profile, notes, collections, favorites, logout } = this.props;

    return (
      <Dropdown isOpen={isOpen} toggle={this.toggle}>
        <DropdownToggle color="info">
          <StyledIcon>
            <i className="fas fa-square-full" />
            <i className="fas fa-caret-down page-down" />
          </StyledIcon>
        </DropdownToggle>

        <DropdownCustom
          close={this.close}
          items={[getStarted(), profile(), notes(), collections(), favorites(), logout()]}
        />
      </Dropdown>
    );
  }
}

Profile.propTypes = {
  getStarted: func.isRequired,
  profile: func.isRequired,
  notes: func.isRequired,
  collections: func.isRequired,
  favorites: func.isRequired,
  logout: func.isRequired
};

export default Action(Fade(Profile));
