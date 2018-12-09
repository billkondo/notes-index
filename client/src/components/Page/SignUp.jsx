import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Fade from '../High_Order/Fade';

import { extraSmallFont } from '../../styles/defaultStyles';

const StyledLink = styled(Link)`
  position: relative;

  display: grid;
  align-items: center;

  grid-template-columns: auto auto;
  color: white;
  font-size: ${extraSmallFont};
  grid-gap: 0.5rem;

  &:hover {
    color: darkgray;
    text-decoration: none;
    transform: scale(1.2);
    transition: all 100ms ease-out;
  }
`;

const Center = styled.span`
  display: grid;
  align-items: center;
`;

const SignUp = () => (
  <StyledLink to="/">
    <i className="fas fa-user-plus cyan-color" />
    <Center> Sign Up </Center>
  </StyledLink>
);

export default Fade(SignUp);
