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
import ChatPage from "../Chat-page/Chat-student-form";
import Navbar from "../Navbar/Navbar";
import { resumeSession } from "../../Redux/Actions/loginAction";
import AdvPage from "../Advisor-page/Advisor-page";

class App extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.resume();
  }
  render() {
    // @ts-ignore
    const { isLogin, userType, username } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/redir" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/redir">
            {userType === "student" ? (
              <Redirect to={`/table/${username}`} />
            ) : (
              <Redirect to="/adv" />
            )}
          </Route>
          <Route path="/login">
            {isLogin ? <Redirect to="/redir" /> : <LoginPage />}
          </Route>
          <Route path="/table/:id">
            <Navbar isTablePage={true} />
            {isLogin ? <TablePage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/table">
            {userType === "student" ? (
              <Redirect to={`/table/${username}`} />
            ) : (
              <Redirect to="/adv" />
            )}
          </Route>
          <Route path="/chat">
            <Navbar />
            {isLogin ? <ChatPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/adv">
            <Navbar />
            {isLogin ? <AdvPage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  userType: state.login.userType,
  username: state.login.username
});

const mapDispatchToProps = dispatch => {
  return {
    resume: () => dispatch(resumeSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
