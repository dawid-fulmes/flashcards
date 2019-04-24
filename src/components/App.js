import React, { Component } from 'react';
import EditDeck from './EditDeck/EditDeck';
import Learn from './Learn/Learn';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EditDeck />
        <Learn />
      </div>
    );
  }
}

export default App;
