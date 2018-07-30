import React from 'react';

import CreateNote from './CreateNote/CreateNote';
import NotesMenu from './Notes-Menu/NotesMenu';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <CreateNote />
      </div>
    );
  }
}

export default App;