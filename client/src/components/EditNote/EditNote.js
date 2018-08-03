import React from 'react';

import FooterEdit from './FooterEdit';

class EditNote extends React.Component {
  render() {
    return (
      <div id="edit-note-page">
        <div id="edit-note">
          <FooterEdit />
        </div>
      </div>
    );
  }
};

export default EditNote;