import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';
import { smallFont, smallSpacing, extraSmallFont } from '../../../styles/defaultStyles';

const StyledTopic = styled.div`
  font-size: ${smallFont};
  padding-bottom: ${smallSpacing};
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 700px) {
    font-size: ${extraSmallFont};
  }
`;

const Topic = ({ topic }) => <StyledTopic>{`---   ${topic}`}</StyledTopic>;

Topic.propTypes = {
  topic: string.isRequired
};

export default Topic;
