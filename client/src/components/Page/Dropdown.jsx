import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import { func } from 'prop-types';

import { dropdownArray, dropdownObject } from '../../propTypes/propTypes';

const Line = ({ item }) => (
  <DropdownItem className="page-dropdown-line" onClick={item.onClick}>
    {item.label}
  </DropdownItem>
);

Line.propTypes = {
  item: dropdownObject.isRequired
};

const Dropdown = ({ items, close }) => (
  <DropdownMenu className="page-dropdown" onClick={close}>
    {items.map(value => (
      <Line key={value.label} item={value} />
    ))}
  </DropdownMenu>
);

Dropdown.propTypes = {
  items: dropdownArray.isRequired,
  close: func.isRequired
};

export default Dropdown;
