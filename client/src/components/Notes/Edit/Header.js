import React from 'react';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';

const Header = (props) => {
  const exit = () => {
    props.history.push('/Notes');
  }

  return (
    <div id="header-edit">
      <div id="header-title"> Edit Note </div>
      <ExitButton click={exit} />
    </div>
  );
}

export default withRouter(Header);