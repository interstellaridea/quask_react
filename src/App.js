import React, { Component } from 'react';
import './App.css';
import {ActionCable, Cable } from 'action-cable-react';
import Questionview from './question_view';

// Defining ActionCable Channel
var actionCable = ActionCable.createConsumer('ws://localhost:3000/cable');

// Creating a new cable object
var cable = new Cable({
  QuestionChannel: actionCable.subscriptions.create({
    channel: 'QuestionChannel', question: 'example_question'},
    ['name'])
});




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quesk test connections</h1>
        </header>
        <Questionview cable={cable}/>
      </div>
    );
  }
}

export default App;
