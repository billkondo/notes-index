import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { DropdownMenu } from 'reactstrap';

const Line = ({ item }) => 
{
  if (item.path)
    return (
      <Link className="page-dropdown-line" to={item.path}>
        {item.label}
      </Link>
    );

  return (
    <div className="page-dropdown-line" onClick={item.onClick}>
      {item.label} 
    </div>
  );
}

const Dropdown = ({ items, toggle }) => (
  <DropdownMenu className="page-dropdown" onClick={toggle}>
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
  </DropdownMenu>
);

Dropdown.propTypes = {
  items: propTypes.array.isRequired
}

export default Dropdown;