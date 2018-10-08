import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

import { favoriteFlip } from '../../../actions/notes-operations';

const Header = (props) => {
  const { favorite, favoriteFlip } = props;

  const exit = () => props.history.push('/Notes');

  return (
    <div className="notes-edit-header">
      <div className="title"> Edit Note </div>
      <ExitButton click={exit} />
      <Favorite on={favorite} onClick={favoriteFlip} />
    </div>
  );
}

export default withRouter(connect(
  (state) => ({
    favorite: state.notesOperations.favorite  
  }),
  { favoriteFlip }
)(Header));