import React from 'react';
import Header from './Header';
import FooterEdit from './Footer';

import { CSSTransition } from 'react-transition-group'; 

import {
  
} from '../../../actions/edit-note';


class Edit extends React.Component {
  state = {
    in: true
  }

  closeMenu = () => this.setState({ in: false })

  render() {
    return (
      <CSSTransition
        in={this.state.in}
        timeout={1000}
        classNames={{
          appear: "animated",
          appearActive: "fadeIn"
        }}
        appear={true}
      >
        <div id="edit-page">
          <div id="edit-note">
            <Header closeMenu={this.closeMenu} />
            <FooterEdit />
          </div>
        </div>
      </CSSTransition>
    );
  }
};

export default Edit;