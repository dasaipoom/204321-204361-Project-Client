import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from "../Login-page/Login-page";
import { connect } from "react-redux";
import TablePage from "../Table-page/Table-page";
import ChatPage from "../Chat-page/Chat-page";

class App extends Component {
  render() {
    // @ts-ignore
    const { isOnProgress, isLogin, userType } = this.props;
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {isLogin ? <Redirect to="/redir" /> : <Redirect to="/login" />}
            </Route>
            <Route path="/redir">
              {userType === "student" ? (
                <Redirect to="/table" />
              ) : (
                <Redirect to="/chat" />
              )}
            </Route>
            <Route path="/login">
              {isLogin ? <Redirect to="/redir" /> : <LoginPage />}
            </Route>
            <Route path="/table">
              {isLogin ? <TablePage /> : <Redirect to="/login" />}
            </Route>
            <Route path="/chat">
              {isLogin ? <ChatPage /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  userType: state.login.userType
});

export default connect(mapStateToProps)(App);
