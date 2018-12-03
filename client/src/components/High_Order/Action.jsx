import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutUser } from '../../actions/authentication';

export default Component => {
  class Dropdown extends React.Component {
    addNote = () => ({
      label: 'Add Note',
      onClick: () => {
        const { history } = this.props;
        history.push('/Notes/Add');
      }
    });

    addCollection = () => ({
      label: 'Add Collection',
      onClick: () => {
        const { history } = this.props;
        history.push('/Collections/Add');
      }
    });

    getStarted = () => ({
      label: 'Get Started',
      onClick: () => {
        const { history } = this.props;
        history.push('/');
      }
    });

    profile = () => ({
      label: 'Profile',
      onClick: () => {
        const { history } = this.props;
        history.push('/Profile');
      }
    });

    notes = () => ({
      label: 'Notes',
      onClick: () => {
        const { history } = this.props;
        history.push('/Notes');
      }
    });

    collections = () => ({
      label: 'Collections',
      onClick: () => {
        const { history } = this.props;
        history.push('/Collections');
      }
    });

    favorites = () => ({
      label: 'Favorite',
      onClick: () => {
        const { history } = this.props;
        history.push('/Favorite');
      }
    });

    logout = () => ({
      label: 'Log Out',
      onClick: () => {
        const { signOutUserConnect, history } = this.props;

        signOutUserConnect();
        history.push('/');
      }
    });

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
          getStarted={this.getStarted}
          {...this.props}
        />
      );
    }
  }

  return withRouter(
    connect(
      null,
      { signOutUserConnect: signOutUser }
    )(Dropdown)
  );
};
