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
import Navbar from "../Navbar/Navbar";

class App extends Component {
  render() {
    // @ts-ignore
    return (
      <React.Fragment>
        <Navbar />
        <TablePage />
      </React.Fragment>

    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  userType: state.login.userType
});

export default connect(mapStateToProps)(App);
