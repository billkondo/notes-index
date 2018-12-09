import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { colorBlack, mediumFont, extraSmallFont } from '../../styles/defaultStyles';

import Add from './Add';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Header = styled.div`
  background: ${colorBlack};

  display: grid;
  align-items: center;

  padding-left: 20vw;
  padding-right: 20vw;

  height: 4rem;
  width: 100vw;

  @media (max-width: 700px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const WrapperButtons = styled(Wrapper)`
  justify-items: end;
`;

const Logo = styled.div`
  justify-self: start;
  word-spacing: 0.5rem;
  font-size: ${mediumFont};
  color: white;

  @media (max-width: 700px) {
    font-size: ${extraSmallFont};
  }
`;

const PageHeader = ({ isAuthenticated }) => (
  <Header>
    <Wrapper>
      <Logo> NOTES INDEX </Logo>

      {isAuthenticated && (
        <WrapperButtons>
          <Add />
          <Profile />
        </WrapperButtons>
      )}

      {!isAuthenticated && (
        <WrapperButtons>
          <SignIn />
          <SignUp />
        </WrapperButtons>
      )}
    </Wrapper>
  </Header>
);

PageHeader.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default connect(state => ({
  isAuthenticated: state.authentication.isAuthenticated
}))(PageHeader);
