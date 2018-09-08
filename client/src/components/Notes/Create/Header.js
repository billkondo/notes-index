import React from 'react';

import ExitButton from '../../Buttons/ExitButton';

const Header = () => (
  <div id="header-create">
    <div id="header-title"> Create Note </div>
    <ExitButton to='/Notes' />
  </div>
);

export default Header;