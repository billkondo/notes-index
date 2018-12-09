import React from 'react';
import { number, string } from 'prop-types';

import styled from 'styled-components';
import { mediumFont, colorBlue, smallFont } from '../../../styles/defaultStyles';

const StyledTitle = styled.div`
  font-size: ${mediumFont};

  @media (max-width: 700px) {
    font-size: ${smallFont};
  }
`;

const Index = styled.span`
  color: ${colorBlue};
`;

const PropsTitle = styled.span`
  margin-left: 2rem;

  @media (max-width: 700px) {
    margin-left: 0.3rem;
  }
`;

const Title = ({ index, title }) => (
  <StyledTitle>
    <Index>{`${index}.`}</Index>
    <PropsTitle>{`${title}`}</PropsTitle>
  </StyledTitle>
);

Title.propTypes = {
  index: number.isRequired,
  title: string.isRequired
};

export default Title;
