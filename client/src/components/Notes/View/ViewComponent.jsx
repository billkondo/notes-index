import React from 'react';

import styled from 'styled-components';
import { mediumSpacing, shadowOne } from '../../../styles/defaultStyles';

import { noteObject } from '../../../propTypes/propTypes';

import Fade from '../../High_Order/Fade';
import Header from '../../View/Header';
import Description from '../../View/Description';
import Commentaries from '../../View/Commentaries';
import Tags from '../../View/Tags';

const StyledView = styled.div`
  width: 50vw;
  padding: ${mediumSpacing};
  background: linear-gradient(#1f3057, #2a283d);

  box-shadow: ${shadowOne};

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const ViewComponent = ({ note }) => {
  const { title, description, favorite, commentaries, tags } = note;

  return (
    <StyledView>
      <Header title={title} favorite={favorite} />
      <Description description={description} flag={0} />
      <Commentaries commentaries={commentaries} flag={0} />
      <Tags tags={tags} />
    </StyledView>
  );
};

ViewComponent.propTypes = {
  note: noteObject.isRequired
};

export default Fade(ViewComponent);
