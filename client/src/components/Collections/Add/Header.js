import React from 'react';

import ExitButton from '../../Buttons/ExitButton';

const Header = () => (
  <div className="collections-header">
    <ExitButton to='/Collections' />   
     
    <div className="collections-header-title">
      Add Collection
    </div>
  </div>
);  

export default Header;