import React, { Component } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "../Login-page/Login-page";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
          </Switch>
      </Router>
    )
  }
}

export default App
