import React, { Component } from 'react';
import './App.css';
import QuestionConnection from './qustions_connection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quesk test connections</h1>
        </header>
        <QuestionConnection />
      </div>
    );
  }
}

export default App;
