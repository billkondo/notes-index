import React from 'react';

import Header from './Page/Header';
import Routes from './Notes/Routes';
import SignUp from './SignUp/SignUp';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <SignUp />
        {/* <Routes /> */}
      </div>
    );
  }
}

export default App;