import React from 'react';
import propTypes from 'prop-types';

const Line = ({ item }) => (
  <div className="page-dropdown-line">
    {item.label} 
  </div>
);

const Dropdown = ({ items }) => (
  <div className="page-dropdown">
    {
      items.map(value => {
        return (
          <Line 
            key={value.label}
            item={value}
          />
        );
      })
    }
  </div>
);

Dropdown.propTypes = {
  items: propTypes.array.isRequired
}

export default Dropdown;