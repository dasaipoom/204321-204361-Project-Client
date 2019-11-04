import React from "react";
import LoginForm from "./Login-form/Login-form";
import "./Login-page.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="flex-container full">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
