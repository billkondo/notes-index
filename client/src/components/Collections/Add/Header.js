import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bool, func } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Favorite from '../../Buttons/FavoriteButton';

import { favoriteFlip } from '../../../actions/collections-operations';

const Header = (props) => {
  const { favorite, favoriteFlip } = props;

  const exit = () => props.history.push('/Collections');

  return (
    <div className="collections-header">
      <ExitButton click={exit} />   
      <Favorite on={favorite} onClick={favoriteFlip} />
      
      <div className="collections-header-title">
        Add Collection
      </div>
    </div>
  );  
}

Header.propTypes = {
  favorite: bool.isRequired, 
  favoriteFlip: func.isRequired
}

export default withRouter(connect(
  (state) => ({
    favorite: state.collectionsOperations.favorite
  }),
  { favoriteFlip }
)(Header));