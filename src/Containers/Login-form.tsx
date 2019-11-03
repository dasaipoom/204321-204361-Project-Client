import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "../Service/login-service";
import "../Components/Login-page/Login-page.scss";

const LoginForm = ({ dispatch }) => {
  let username;
  let password;

  return (
   <div className= "container">
     <div className="columns is-centered">
      <label className="LOGO">Plan.G</label>
     </div>
     
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
    
    <div className="columns is-centered">
    
          <div className="loginbox">
          <div className="columns is-centered">
              <div className="is-one-quarter">
              <div className="field">
                <label className="label">ID</label>
                <div className="control">
                  <input
                    className="loginput"
                    type="username"
                    name="username"
                    ref={node => (username = node)}
                  />
                </div>
              </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="is-one-quarter">
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="loginput"
                    type="password"
                    name="password"
                    ref={node => (password = node)}
                  />
                </div>
              </div>
              </div>
            </div>

              
           
          </div>  
        </div>
            
          <div className="columns is-centered">
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="logbutton is-link">
                  Login
                </button>
              </div>
            </div>
          </div>
      </form>
      
    </div>
  );
};

export default connect()(LoginForm);

