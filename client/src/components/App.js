import React from 'react';

import Routes from './Notes/Routes';
import Header from './Page/Header';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;