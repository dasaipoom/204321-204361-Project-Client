import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loggingOut } from "../../../Service/login-service";

const NavbarEnd = ({ dispatch, isTablepage }) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        {isTablepage && (
          <p className="control">
            <button className="button is-primary">
              <span className="icon">
                <i className="fas fa-comment"></i>
              </span>
              <span>Chat</span>
            </button>
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

NavbarEnd.propTypes = {
  isTablepage: PropTypes.bool
};

export default connect()(NavbarEnd);
