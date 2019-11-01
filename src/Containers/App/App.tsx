import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../../Components/Login-page/Login-page";
import { connect } from "react-redux";

class App extends Component {
  render() {
    // @ts-ignore
    const { isOnProgress, isLogin } = this.props;
    return (
      <div className="bg">
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOnProgress: state.login.isOnProgress,
  isLogin: state.login.isLogin
});

export default connect(mapStateToProps)(App);
