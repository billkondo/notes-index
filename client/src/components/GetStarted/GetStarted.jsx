import React from 'react';
import styled from 'styled-components';

import { largeFont, defaultFont, colorBlack } from '../../styles/defaultStyles';

const GetStarted = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: ${largeFont};
  font-family: ${defaultFont};
  color: ${colorBlack};
`;

export default () => (
  <GetStarted>
    <Title> GETTING STARTED </Title>
  </GetStarted>
);
