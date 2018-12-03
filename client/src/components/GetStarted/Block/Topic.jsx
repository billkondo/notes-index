import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';
import { smallFont, mediumSpacing } from '../../../styles/defaultStyles';

const StyledTopic = styled.div`
  font-size: ${smallFont};
  padding-bottom: ${mediumSpacing};
`;

const Topic = ({ topic }) => <StyledTopic>{`---   ${topic}`}</StyledTopic>;

Topic.propTypes = {
  topic: string.isRequired
};

export default Topic;
