import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Ask from './ask';
import Answer from './answer';

const Header = () => (
  <header>
    <nav className="nav">
      <ul>
        <li><Link to='/ask'>Ask</Link></li>
        <li><Link to='/answer'>Answer</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/ask' component={Ask} />
      <Route exact path='/answer' component={Answer} />
    </Switch>
  </main> 
)

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
