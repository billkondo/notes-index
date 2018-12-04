import React from 'react';

import styled from 'styled-components';

import { tagsArray } from '../../propTypes/propTypes';
import { mediumSpacing, smallSpacing, smallFont } from '../../styles/defaultStyles';

const StyledTags = styled.div`
  width: 100%;
  margin-top: ${mediumSpacing};
`;

const Icon = styled.div`
  color: white;
  font-size: ${smallFont};
  margin-bottom: ${smallSpacing};
`;

const ContainerTags = styled.div`
  padding: ${smallSpacing};
`;

const Tag = styled.div`
  color: white;
  font-size: ${smallFont};
  margin-bottom: ${smallSpacing};
`;

const Tags = ({ tags }) => (
  <StyledTags>
    <Icon>
      <i className="fas fa-hashtag" />
    </Icon>

    <ContainerTags>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </ContainerTags>
  </StyledTags>
);

Tags.propTypes = {
  tags: tagsArray.isRequired
};

export default Tags;
