
import './App.css';
import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import './App.scss';

import Gaem from './components/Game/Game'
import GameHistory from './components/GameHistory/GameHistory'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='Game' component={Game} />
          <Route history={history} path='/GameHistory' component={GameHistory} />
          <Redirect from='/' to='/Game'/>
        </Switch>
      </div>
    );
  }
}

export default App;
