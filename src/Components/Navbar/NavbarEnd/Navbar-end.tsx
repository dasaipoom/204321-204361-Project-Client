import React from "react";
import PropTypes from "prop-types";

const NavbarEnd = ({ isTablepage }) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a className="button">
            <span className="icon">
              <i className="fas fa-twitter" aria-hidden="true"></i>
            </span>
            <span>Tweet</span>
          </a>
        </p>
        <p className="control">
          <a className="button is-primary">
            <span className="icon">
              <i className="fas fa-download" aria-hidden="true"></i>
            </span>
            <span>Download</span>
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
