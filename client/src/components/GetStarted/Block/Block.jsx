import React from 'react';
import { string, arrayOf, number, shape } from 'prop-types';

import styled from 'styled-components';
import { mediumSpacing } from '../../../styles/defaultStyles';

import Title from './Title';
import Topic from './Topic';

const StyledBlock = styled.div`
  justify-self: start;

  display: grid;
  justify-items: start;

  padding-left: ${mediumSpacing};
  padding-right: ${mediumSpacing};

  width: 100%;
`;

const ContainerTopics = styled.div`
  padding: ${mediumSpacing};
`;

const Block = ({ data }) => (
  <StyledBlock>
    <Title index={data.index} title={data.title} />

    <ContainerTopics>
      {data.topics.map(topic => (
        <Topic key={topic} topic={topic} />
      ))}
    </ContainerTopics>
  </StyledBlock>
);

Block.propTypes = {
  data: shape({
    index: number.isRequired,
    title: string.isRequired,
    topics: arrayOf(string).isRequired
  }).isRequired
};

export default Block;
