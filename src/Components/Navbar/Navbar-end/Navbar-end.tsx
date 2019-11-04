import React from "react";
import PropTypes from "prop-types";

const NavbarEnd = ({ isTablepage }) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a className="button chat">
            <span className="icon">
              <i className="fas fa-comment"></i>
            </span>
            <span>Chat</span>
          </a>
        </p>
        <p className="control">
          <a className="button logout">
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <span>Logout</span>
          </a>
        </p>
      </div>
    </div>
  );
};

NavbarEnd.propTypes = {
  isTablepage: PropTypes.bool
};

export default NavbarEnd;
