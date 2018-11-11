import React from 'react';
import propTypes from 'prop-types';
import { DropdownMenu, DropdownItem } from 'reactstrap';

const Line = ({ item }) => (
  <DropdownItem className="page-dropdown-line" onClick={item.onClick}>
    {item.label}
  </DropdownItem>
);

const Dropdown = ({ items, close }) => (
  <DropdownMenu className="page-dropdown" onClick={close}>
    {items.map(value => (
      <Line key={value.label} item={value} />
    ))}
  </DropdownMenu>
);

Dropdown.propTypes = {
  items: propTypes.array.isRequired
};

export default Dropdown;
