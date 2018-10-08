import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bool, func } from 'prop-types';

import { favoriteFlip } from '../../../actions/notes-operations';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

const Header = (props) => {
  const { favorite, favoriteFlip } = props;

  const exit = () => props.history.push('/Notes');

  return (
    <div className="notes-header">
      <div className="title"> Add Note </div>
      <ExitButton click={exit} />
      <Favorite on={favorite} onClick={favoriteFlip} />
    </div>
  );
}

Header.propTypes = {
  favorite: bool.isRequired, 
  favoriteFlip: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    favorite: state.notesOperations.favorite  
  }),
  { favoriteFlip }
)(Header));