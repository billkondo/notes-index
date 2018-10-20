import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutUser } from '../../actions/authentication';

export default (Component) => {
  class Dropdown extends React.Component {
    addNote = () => ({
      label: 'Add Note',
      onClick: () => this.props.history.push('/Notes/Add')
    });

    addCollection = () => ({
      label: 'Add Collection',
      onClick: () => this.props.history.push('/Collections/Add')
    })

    addFavorite = () => ({
      label: 'Add Favorite',
      onClick: () => this.props.history.push('/')
    })

    profile = () => ({
      label: "Profile",
      onClick: () => this.props.history.push('/')
    })
    
    notes = () => ({
      label: "Notes",
      onClick: () => this.props.history.push('/Notes')
    })
    
    collections = () => ({
      label: "Collections",
      onClick: () => this.props.history.push('/Collections')
    })
    
    favorites = () => ({
      label: "Favorite",
      onClick: () => this.props.history.push('/Favorite')
    })

    logout = () => ({
      label: "Log Out",
      onClick: () => {
        this.props.signOutUser();
        this.props.history.push('/');
      }
    })
    
    render() {
      return (
        <Component 
          addNote={this.addNote}
          addCollection={this.addCollection}
          addFavorite={this.addFavorite}
          profile={this.profile}
          notes={this.notes}
          collections={this.collections}
          favorites={this.favorites}
          logout={this.logout}
          {...this.props}
        />
      );
    }
  }
  
  return withRouter(connect(null, { signOutUser })(Dropdown));
}
