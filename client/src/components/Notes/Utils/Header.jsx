import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

import { favoriteFlip } from '../../../actions/notes-operations';

import { historyObject } from '../../../propTypes/propTypes';

const Header = props => {
  const { favorite, favoriteFlipConnect, title, history } = props;

  const exit = () => history.push('/Notes');

  return (
    <div className="notes-header">
      <div className="title">{title}</div>
      <ExitButton click={exit} />
      <Favorite on={favorite} onClick={favoriteFlipConnect} />
    </div>
  );
};

Header.propTypes = {
  title: string.isRequired,
  favorite: bool.isRequired,
  favoriteFlipConnect: func.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    state => ({
      favorite: state.notesOperations.favorite
    }),
    { favoriteFlipConnect: favoriteFlip }
  )(Header)
);
