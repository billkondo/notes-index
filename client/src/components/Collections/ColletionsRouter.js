import React from 'react';

import Header from '../Page/Header';
import Menu from './Main/Menu';
import Add from './Add/Add';

class CollectionsRouter extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />

        <div id="app-body">
          <div className="collections-router">
            <Menu />
            <Add />
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionsRouter;