import React from 'react';

import styled from 'styled-components';
import { smallFont, mediumFont, smallSpacing, mediumSpacing } from '../../styles/defaultStyles';

const StyledDescription = styled.div`
  margin: ${mediumSpacing};

  line-height: ${mediumFont};

  text-align: justify;
  text-justify: inter-word;

  font-size: ${smallFont};
  p {
    padding-bottom: ${smallSpacing};
  }
`;

const Description = () => (
  <StyledDescription>
    <p>
      The main objective of this app is to take fast and concise notes, and quickly find them later.
      It is also possible to group your notes in collections, and mark your favorite ones.
    </p>

    <p>
      The search system is based on tags format. So for each note/collection, you can chose a set of
      tags that describe their content. Later, these tags will be helpful to find any note or
      collection.
    </p>

    <p>
      Finally, this is app is a personal project built in order to help anybody and improve
      programming skills. The code of this project is located on
      <a href="https://github.com/billkondo/notes-index"> Github.</a>
    </p>

    <p> Now, let`s get started ... </p>
  </StyledDescription>
);

export default Description;
