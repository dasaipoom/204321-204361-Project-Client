import React from "react";
import LoginForm from "../../Containers/Login-form";
import "./Login-page.scss";
import LoginStatus from "../../Containers/Login-status";

class LoginPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "#CDC0B0"}}>
        <section className="section container">
          <div className="columns is-centered">
              
              <div className="column is-half">
                <LoginForm />
                <LoginStatus />
              </div>
          </div>  
        </section>
      </div>
    );
  }
}

export default LoginPage;
