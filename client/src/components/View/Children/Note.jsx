import React from 'react';

import styled from 'styled-components';

import TextareaAutosize from 'react-autosize-textarea';

import { number, func, string } from 'prop-types';
import { noteObject } from '../../../propTypes/propTypes';
import {
  smallFont,
  smallSpacing,
  colorBlack,
  mediumFont,
  noteSmallContainer,
  collectionSmallContainer
} from '../../../styles/defaultStyles';

const StyledNote = styled.div`
  background: ${props => (props.index ? '#6c757d' : '#343a40')};
  min-height: 3rem;
  cursor: pointer;
`;

const Header = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  height: 3rem;
`;

const Title = styled.div`
  font-size: ${smallFont};
  color: white;
  margin-left: ${smallSpacing};
`;

const Favorite = styled.div`
  font-size: ${smallFont};
  position: absolute;
  right: 0;
  margin-right: ${smallSpacing};
  color: white;
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${smallSpacing};
`;

const NoteView = styled.div`
  color: white;
  font-size: ${smallFont};
  position: absolute;
  right: 0;
  margin-right: calc(3 * ${smallFont});

  &:hover {
    transform: scale(1.2);
    color: lightgray;
  }
`;

const Icon = styled.div`
  font-size: ${smallFont};
  color: white;
  margin-bottom: ${smallSpacing};
`;

const Column = styled.div`
  padding: ${smallSpacing};
`;

const Tag = styled.div`
  color: white;
  font-size: ${smallFont};
  margin-bottom: ${smallSpacing};
`;

const Note = ({ note, index, onClickNote, idFocused }) => {
  const showContent = idFocused === note.id;

  return (
    <StyledNote index={index} onClick={e => onClickNote(note.id, e.target.id)}>
      <Header>
        <Title>{note.title}</Title>
        <NoteView>{showContent && <i id="VIEW" className="fas fa-eye" />}</NoteView>
        <Favorite>{note.favorite && <i className="fas fa-star" />}</Favorite>
      </Header>

      {showContent && (
        <Container>
          <Column>
            <Icon>
              <i className="fas fa-book book" />
            </Icon>
            <StyledTextarea flag={0} readOnly disabled row={4} value={note.description} />
          </Column>

          <Column>
            <Icon>
              <i className="fas fa-hashtag" />
            </Icon>

            {note.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Column>
        </Container>
      )}
    </StyledNote>
  );
};

Note.propTypes = {
  note: noteObject.isRequired,
  index: number.isRequired,
  onClickNote: func.isRequired,
  idFocused: string.isRequired
};

export default Note;
