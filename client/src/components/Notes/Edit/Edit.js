import React from 'react';
import Header from './Header';
import FooterEdit from './Footer';

import {
  
} from '../../../actions/edit-note';


class Edit extends React.Component {
  render() {
    return (
      <div id="edit-page">
        <div id="edit-note">
          <Header />
          <FooterEdit />
        </div>
      </div>
    );
  }
};

export default Edit;