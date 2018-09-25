import React from 'react';
import { withRouter } from 'react-router-dom';

import ExitButton from '../../Buttons/ExitButton';

const Header = (props) => {
  const exit = () => {
    props.history.push('/Notes');
  }

  return (
    <div className="notes-header">
      <div className="title"> Add Note </div>
      <ExitButton click={exit} />
    </div>
  );
}

export default withRouter(Header);