import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './page/Home';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route path="/" component={Home} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
