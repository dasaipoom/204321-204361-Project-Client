import React, { Component } from "react";
import { connect } from "react-redux";

class LoginStatus extends Component {
  render() {
    const { isLoggingIn, isLogin, isError } = this.props;

    return (
      <div>
        {isLoggingIn && <p>User is Logging in</p>}
        {isLogin && <p>User is Logged in</p>}
        {isError && <p>Login is error</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
  isLogin: state.login.isLogin,
  isError: state.login.isError
});

export default connect(mapStateToProps)(LoginStatus);
