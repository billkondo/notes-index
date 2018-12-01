import React from 'react';
import styled from 'styled-components';

import { largeFont, smallFont, defaultFont } from '../../styles/defaultStyles';

const Welcome = styled.div`
  margin: ${largeFont};
  padding: ${largeFont};
  font-family: ${defaultFont};
`;

const Title = styled.h1`
  color: white;
  font-size: ${largeFont};
  text-align: center;
  margin-bottom: ${smallFont};
`;

const Paragraph = styled.p`
  margin: ${smallFont};
  font-size: 1.5rem;
  color: lightgray;

  text-align: justify;
  text-justify: inter-word;
`;

export default () => (
  <Welcome>
    <Title> Organize your notes </Title>

    <Paragraph>
      Notes Index is a way for taking simple and concise notes, organize them and find them later.
    </Paragraph>
  </Welcome>
);
