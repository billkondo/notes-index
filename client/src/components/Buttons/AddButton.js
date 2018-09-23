import React from 'react';
import propTypes from 'prop-types';

const AddButton = ({ click }) => (
  <button className="add-button" onClick={click}>
    <i className="fas fa-plus plus" />
  </button>
);

AddButton.propTypes = {
  click: propTypes.func.isRequired
}

export default AddButton;