import React from 'react';

import NoteDisplay from './NoteDisplay';

class UserNotes extends React.Component {
  render() {
    return (
      <div id="user-notes">
        {
          this.props.notes.map((value, index) => {
            return (
              <NoteDisplay key={index} note={value} />
            );
          })
        }
      </div>
    );
  }
}

export default UserNotes;