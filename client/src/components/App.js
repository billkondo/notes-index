import React from 'react';
import Notes from './Notes';
import Note from './Note/Note';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Note />
      </div>
    );
  }
}

export default App;