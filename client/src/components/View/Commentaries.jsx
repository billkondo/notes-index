import React from 'react';
import { number } from 'prop-types';

import styled from 'styled-components';

import TextareaAutosize from 'react-autosize-textarea';

import {
  smallFont,
  smallSpacing,
  mediumSpacing,
  colorBlack,
  mediumFont,
  collectionSmallContainer,
  noteSmallContainer
} from '../../styles/defaultStyles';

import { commentsArray } from '../../propTypes/propTypes';

const StyledCommentaries = styled.div`
  width: 100%;
  padding: ${smallSpacing};
`;

const Icon = styled.div`
  font-size: ${smallFont};
  margin-bottom: ${smallSpacing};
  color: white;
  margin-top: ${mediumSpacing};
`;

const StyledTextarea = styled(TextareaAutosize)`
  color: ${colorBlack};
  width: 100%;
  font-size: ${smallFont};
  border: none;
  padding: ${smallSpacing};
  line-height: ${mediumFont};
  margin-bottom: ${smallSpacing};
  background: ${props => (!props.flag ? noteSmallContainer : collectionSmallContainer)};
`;

const Commentaries = ({ commentaries, flag }) => (
  <StyledCommentaries>
    <Icon>
      <i className="fas fa-book-open book" />
    </Icon>

    <div className="container-commentaries">
      {commentaries.map(value => (
        <StyledTextarea
          type="textarea"
          key={value.id}
          value={value.comment}
          flag={flag}
          readOnly
          disabled
          rows={2}
        />
      ))}
    </div>
  </StyledCommentaries>
);

Commentaries.propTypes = {
  commentaries: commentsArray.isRequired,
  flag: number.isRequired
};

export default Commentaries;
