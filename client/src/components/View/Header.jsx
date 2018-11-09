import React from 'react';
import { string, bool } from 'prop-types';

const Header = ({ title, favorite }) => (
  <div className="header">
    <i className="fas fa-quote-left icon-quote" />
    <span className="title">{title}</span>
    {favorite && <i className="fas fa-star icon-star" />}
  </div>
);

Header.propTypes = {
  title: string.isRequired,
  favorite: bool.isRequired
};

export default Header;
