import React, { Component } from "react";
import { connect } from "react-redux";

class LoginStatus extends Component {
  render() {
    // @ts-ignore
    const { isOnProgress, isLogin, isError, errInfo } = this.props;

    return (
      <div>
        {isOnProgress && <p>User is Logging in</p>}
        {isLogin && <p>User is Logged in</p>}
        {isError && <p>Login is error: {errInfo}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOnProgress: state.login.isOnProgress,
  isLogin: state.login.isLogin,
  isError: state.login.isError,
  errInfo: state.login.errInfo
});

export default connect(mapStateToProps)(LoginStatus);
