import React from 'react';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';

const Header = (props) => {
  const exit = () => {
    props.history.push('/Collections');
  }

  return (
    <div className="collections-header">
      <ExitButton click={exit} />   
      
      <div className="collections-header-title">
        Add Collection
      </div>
    </div>
  );  
}

export default withRouter(Header);