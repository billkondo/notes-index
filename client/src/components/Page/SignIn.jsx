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

const SignIn = () => (
  <StyledLink to="/SignIn">
    <i className="fas fa-sign-in-alt blue-color" />
    <Center> Sign In </Center>
  </StyledLink>
);

export default Fade(SignIn);
