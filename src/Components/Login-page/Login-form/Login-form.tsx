import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "../../../Service/login-service";
import "../Login-page.scss";

function errText(info) {
  if ((info = "UsnPwd")) return <p>Wrong Username or Password!</p>;
  return <p>Error Occured</p>;
}

const LoginForm = ({ dispatch, isError, errInfo }) => {
  let username;
  let password;

  return (
    <>
      <label className="LOGO">Plan.G</label>
      <label className="LOGO2">
        เว็บไซต์ติดตามและเฝ้าระวังการพ้นสภาพนักศึกษา
      </label>
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
                  <div className="control">
                    <input
                      className="input"
                      type="username"
                      name="username"
                      ref={node => (username = node)}
                    />
                  </div>
                </div>
                <div className="field bot">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      ref={node => (password = node)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">{isError && errText(errInfo)}</div>
                </div>
              </div>
            </div>
            <div className="flexbox">
              <div className="control">
                <button type="submit" className="logbutton button">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isError: state.login.isError,
  errInfo: state.login.errInfo
});

export default connect(mapStateToProps)(LoginForm);
