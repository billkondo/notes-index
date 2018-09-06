import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { exitMenu, enterAdd } from '../../../actions/collections-router';

const Functions = ({ transitionMenuToAdd }) => (
  <div className="collections-functions">
    <button className="collections-button" onClick={transitionMenuToAdd}> ADD </button>
  </div>
);

Function.propTypes = {
  transitionMenuToAdd: propTypes.func.isRequired
}

export default connect(
  null, 
  (dispatch) => ({
    transitionMenuToAdd: () => {
      dispatch(exitMenu());
      setTimeout(() => dispatch(enterAdd()), 800);
    }
  })
)(Functions);