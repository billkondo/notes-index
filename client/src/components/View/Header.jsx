import React from 'react';
import { string, bool } from 'prop-types';

import styled from 'styled-components';
import { smallFont, smallSpacing, mediumSpacing } from '../../styles/defaultStyles';

const StyledHeader = styled.div`
  position: relative;
  margin-bottom: ${mediumSpacing};
  width: 100%;
`;

const Quote = styled.span`
  color: white;
  font-size: ${smallFont};
  margin-right: ${smallSpacing};
`;

const Title = styled.span`
  font-size: ${smallFont};
  color: white;
`;

const Favorite = styled.span`
  font-size: ${smallFont};
  color: white;
  position: absolute;
  right: 0;
`;

const Header = ({ title, favorite }) => (
  <StyledHeader>
    <Quote>
      <i className="fas fa-quote-left icon-quote" />
    </Quote>

    <Title>{title}</Title>

    <Favorite>{favorite && <i className="fas fa-star icon-star" />}</Favorite>
  </StyledHeader>
);

Header.propTypes = {
  title: string.isRequired,
  favorite: bool.isRequired
};

export default Header;
