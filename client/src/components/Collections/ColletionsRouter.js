import React from 'react';

import Menu from './Main/Menu';
import Add from './Add/Add';

class CollectionsRouter extends React.Component {
  render() {
    return (
      <div className="collections-router">
        <Menu />
        <Add />
      </div>
    );
  }
}

export default CollectionsRouter;