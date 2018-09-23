import React from 'react';

import ExitButton from '../../Buttons/ExitButton';

const Header = () => (
  <div className="notes-header">
    <div className="title"> Add Note </div>
    <ExitButton to='/Notes' />
  </div>
);

export default Header;