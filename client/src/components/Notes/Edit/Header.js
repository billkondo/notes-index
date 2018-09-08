import React from 'react';

import ExitButton from '../../Buttons/ExitButton';

const Header = () => (
  <div id="header-edit">
    <div id="header-title"> Edit Note </div>
    <ExitButton to='/Notes' />
  </div>
);

export default Header;