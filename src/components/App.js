import React, { Component } from 'react';
import EditDeck from './EditDeck/EditDeck';
import Learn from './Learn/Learn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EditDeck />
        <Learn />
      </div>
    );
  }
}

export default App;
