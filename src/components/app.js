import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Ask from './ask';
import Answer from './answer';
import Navbar from './navbar';


const Main = () => (
  <div  className='main'>
    <Switch>
      <Route path='/ask' component={Ask} />
      <Route path='/answer' component={Answer} />
    </Switch>
  </div>
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
