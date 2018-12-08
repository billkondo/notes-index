import React from 'react';

import styled from 'styled-components';
import { mediumSpacing, shadowOne } from '../../../styles/defaultStyles';

import { collectionObject } from '../../../propTypes/propTypes';

import Fade from '../../High_Order/Fade';
import Header from '../../View/Header';
import Description from '../../View/Description';
import Tags from '../../View/Tags';
import Children from '../../View/Children/Children';

const StyledView = styled.div`
  width: 50vw;
  padding: ${mediumSpacing};
  background: linear-gradient(#122b3e, #172035);

  box-shadow: ${shadowOne};

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const ViewComponent = ({ collection }) => {
  const { title, description, favorite, tags, children } = collection;

  return (
    <StyledView>
      <Header title={title} favorite={favorite} />
      <Description description={description} flag={1} />
      <Tags tags={tags} />
      <Children notes={children} />
    </StyledView>
  );
};

ViewComponent.propTypes = {
  collection: collectionObject.isRequired
};

export default Fade(ViewComponent);
