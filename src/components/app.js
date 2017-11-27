import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Ask from './ask';
import Answer from './answer';
import routes from '../routes';
import Navbar from './navbar';


const Main = () => (
  <main  className='main'>
    <Switch>
      <Route exact path='/ask' component={Ask} />
      <Route exact path='/answer' component={Answer} />
    </Switch>
  </main>
)


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
