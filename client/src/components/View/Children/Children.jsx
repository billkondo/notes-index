import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { childrenArray, historyObject } from '../../../propTypes/propTypes';
import { smallFont, smallSpacing } from '../../../styles/defaultStyles';

import Note from './Note';

const StyledChildren = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  color: white;
  font-size: ${smallFont};
  margin-bottom: ${smallSpacing};
`;

const Container = styled.div``;

class Children extends React.Component {
  state = {
    idFocused: ''
  };

  onClickNote = (id, type) => {
    const { idFocused } = this.state;

    if (id === idFocused) {
      if (type !== 'VIEW') this.setState({ idFocused: '' });
      else {
        const { history } = this.props;

        history.push(`/notes/view/${id}`);
      }
    } else this.setState({ idFocused: id });
  };

  render() {
    const { notes } = this.props;
    const { idFocused } = this.state;

    return (
      <StyledChildren>
        <Icon>
          <i className="fas fa-folder-open folder" />
        </Icon>

        <Container>
          {notes.map((note, index) => (
            <Note
              key={note.id}
              note={note}
              idFocused={idFocused}
              index={index % 2}
              onClickNote={this.onClickNote}
            />
          ))}
        </Container>
      </StyledChildren>
    );
  }
}

Children.propTypes = {
  notes: childrenArray.isRequired,
  history: historyObject.isRequired
};

export default withRouter(Children);
