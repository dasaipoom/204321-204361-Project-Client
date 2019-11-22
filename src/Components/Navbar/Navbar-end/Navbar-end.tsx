import React from "react";
import { connect } from "react-redux";
import { loggingOut } from "../../../Service/login-service";
import { Link } from "react-router-dom";

const NavbarEnd = ({ dispatch, userType, isTablepage }) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        {isTablepage && (
          <p className="control">
            <Link to={`${userType === "student" ? "/chat" : "/adv"}`}>
              <button className="button is-primary">
                <span className="icon">
                  <i className="fas fa-comment"></i>
                </span>
                <span>Chat</span>
              </button>
            </Link>
          </p>
        )}
        {!isTablepage && userType === "student" && (
          <p className="control">
            <Link to="/table">
              <button className="button is-primary">
                <span className="icon">
                  <i className="fas fa-table"></i>
                </span>
                <span>Table</span>
              </button>
            </Link>
          </p>
        )}
        <p className="control">
          <button
            className="button is-danger"
            onClick={() => dispatch(loggingOut())}
          >
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <span>Logout</span>
          </button>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userType: state.login.userType
});

export default connect(mapStateToProps)(NavbarEnd);
