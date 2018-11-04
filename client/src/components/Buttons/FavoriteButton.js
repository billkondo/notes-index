import React from 'react';
import { Button } from 'reactstrap';
import { bool, func } from 'prop-types';


const Favorite = ({ on, onClick }) => (
  <Button color="info" className="favorite" onClick={onClick} >
    {!on && <i className="far fa-star" /> }
    { on && <i className="fas fa-star" /> }
  </Button>
);

Favorite.propTypes = {
  on: bool.isRequired, 
  onClick: func
}

export default Favorite;