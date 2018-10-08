import React from 'react';
import { bool, func } from 'prop-types';

const Favorite = ({ on, onClick }) => (
  <div className="favorite" onClick={onClick} >
    {!on && <i className="far fa-star" /> }
    { on && <i className="fas fa-star" />}
  </div>
);

Favorite.propTypes = {
  on: bool.isRequired, 
  onClick: func
}

export default Favorite;