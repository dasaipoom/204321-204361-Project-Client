import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "../../../Service/login-service";
import "../Components/Login-page/Login-page.scss";

const LoginForm = ({ dispatch }) => {
  let username;
  let password;

  return (
    <>
      <label className="LOGO">Plan.G</label>
      <div className="flexbox">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!(username.value.trim() && password.value.trim())) {
              return;
            }
            dispatch(loggingIn(username.value.trim(), password.value.trim()));
            password.value = "";
          }}
        >
          <div className="flex-container">
            <div className="loginbox">
              <div className="flex-container lbox">
                <div className="field top">
                  <label className="label">ID</label>
                  <input
                    className="loginput"
                    type="username"
                    name="username"
                    ref={node => (username = node)}
                  />
                </div>
                <div className="field bot">
                  <label className="label">Password</label>
                  <input
                    className="loginput"
                    type="password"
                    name="password"
                    ref={node => (password = node)}
                  />
                </div>
              </div>
            </div>
            <div className="flexbox">
              <button
                type="submit"
                className="logbutton button is-link is-loading"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect()(LoginForm);
