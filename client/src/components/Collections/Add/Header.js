import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

import { exitAdd, enterMenu } from '../../../actions/collections-router';

const Header = ({ transitionAddToMenu }) => (
  <div className="collections-header">
    <ExitButton click={transitionAddToMenu} />   
     
    <div className="collections-header-title">
      Add Collection
    </div>
  </div>
);  

Header.propTypes = {
  transitionAddToMenu: propTypes.func.isRequired
}

export default connect(
  null, 
  (dispatch) => ({
    transitionAddToMenu: () => {
      dispatch(exitAdd());
      setTimeout(() => dispatch(enterMenu()), 500);
    }
  })
)(Header);