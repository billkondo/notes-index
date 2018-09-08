import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { DropdownMenu, DropdownItem } from 'reactstrap';

const Line = ({ item }) => 
{
  if (item.path)
    return (
      <DropdownItem>
        <Link className="page-dropdown-line dropdown-item" to={item.path}>
          {item.label}
        </Link>
      </DropdownItem>
    );

  return (
    <DropdownItem>
      <div className="page-dropdown-line dropdown-item" >
        {item.label} 
      </div>
    </DropdownItem>
  );
}

const Dropdown = ({ items }) => (
  <DropdownMenu className="page-dropdown dropdown-menu">
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