import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />

        </header>
      </div>
    );
  }
}

export default App;
