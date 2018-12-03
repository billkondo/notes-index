import React from 'react';

import styled from 'styled-components';
import { largeFont } from '../../styles/defaultStyles';

import { aboutNote, aboutCollection, aboutFavorite, aboutViewAndEdit, aboutFilter } from './topics';

import Fade from '../High_Order/Fade';

import Description from './Description';
import Block from './Block/Block';

const StyledGetStarted = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;

  width: 60vw;
`;

const Title = styled.div`
  font-size: ${largeFont};
`;

const GetStarted = () => (
  <StyledGetStarted>
    <Title> GETTING STARTED </Title>
    <Description />

    <Block data={aboutNote} />
    <Block data={aboutCollection} />
    <Block data={aboutFilter} />
    <Block data={aboutFavorite} />
    <Block data={aboutViewAndEdit} />
  </StyledGetStarted>
);

export default Fade(GetStarted);
