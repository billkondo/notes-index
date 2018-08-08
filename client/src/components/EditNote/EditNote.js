import React from 'react';
import Header from './Header';
import FooterEdit from './FooterEdit';

import {
  
} from '../../actions/edit-note';


class EditNote extends React.Component {
  render() {
    return (
      <div id="edit-note-page">
        <div id="edit-note">
          <Header />
          <FooterEdit />
        </div>
      </div>
    );
  }
};

export default EditNote;