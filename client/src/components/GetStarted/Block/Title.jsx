import React from 'react';
import { number, string } from 'prop-types';

import styled from 'styled-components';
import { mediumFont, colorBlue } from '../../../styles/defaultStyles';

const StyledTitle = styled.div`
  font-size: ${mediumFont};
`;

const Index = styled.span`
  color: ${colorBlue};
`;

const PropsTitle = styled.span`
  margin-left: 2rem;
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
