import React from 'react';

import TextareaAutosize from 'react-autosize-textarea';

import { string, number } from 'prop-types';

import styled from 'styled-components';
import {
  smallFont,
  smallSpacing,
  colorBlack,
  mediumFont,
  noteSmallContainer,
  collectionSmallContainer
} from '../../styles/defaultStyles';

const StyledDescription = styled.div`
  width: 100%;
`;

const Icon = styled.span`
  font-size: ${smallFont};
  color: white;
`;

const InputContainer = styled.div`
  margin-top: ${smallSpacing};
`;

const StyledTextarea = styled(TextareaAutosize)`
  color: ${colorBlack};
  width: 100%;
  font-size: ${smallFont};
  border: none;
  padding: ${smallSpacing};
  line-height: ${mediumFont};
  background: ${props => (!props.flag ? noteSmallContainer : collectionSmallContainer)};
`;

const Description = ({ description, flag }) => (
  <StyledDescription>
    <Icon>
      <i className="fas fa-book book" />
    </Icon>

    <InputContainer>
      <StyledTextarea value={description} readOnly flag={flag} rows={5} disabled />
    </InputContainer>
  </StyledDescription>
);

Description.propTypes = {
  description: string.isRequired,
  flag: number.isRequired
};

export default Description;
