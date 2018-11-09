import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

import { favoriteFlip } from '../../../actions/notes-operations';

const Header = props => {
  const { favorite, favoriteFlip, title } = props;

  const exit = () => props.history.push('/Notes');

  return (
    <div className="notes-header">
      <div className="title"> {title} </div>
      <ExitButton click={exit} />
      <Favorite on={favorite} onClick={favoriteFlip} />
    </div>
  );
};

Header.propTypes = {
  title: string.isRequired,
  favorite: bool.isRequired,
  favoriteFlip: func.isRequired
};

export default withRouter(
  connect(
    state => ({
      favorite: state.notesOperations.favorite
    }),
    { favoriteFlip }
  )(Header)
);
