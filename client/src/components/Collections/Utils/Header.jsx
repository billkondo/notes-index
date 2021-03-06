import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bool, func, string, shape } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

import { favoriteFlip } from '../../../actions/collections-operations';

const Header = props => {
  const { favorite, favoriteFlipConnect, title, history } = props;

  const exit = () => history.push('/Collections');

  return (
    <div className="collections-add-header">
      <ExitButton click={exit} />
      <Favorite on={favorite} onClick={favoriteFlipConnect} />

      <div className="title">{title}</div>
    </div>
  );
};

Header.propTypes = {
  title: string.isRequired,
  favorite: bool.isRequired,
  favoriteFlipConnect: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
};

export default withRouter(
  connect(
    state => ({
      favorite: state.collectionsOperations.favorite
    }),
    { favoriteFlipConnect: favoriteFlip }
  )(Header)
);
