import React from "react";
import NavbarEnd from "./Navbar-end/Navbar-end";
import "./Navbar.scss";
import NavForTable from "./Nav-for-table/Nav-for-table";

class Navbar extends React.Component {
  render() {
    // @ts-ignore
    const isTablePage = true;
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#top">
            Plan.G
          </a>

          <a role="button" className="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <NavForTable />
        </div>
        <div className="navbar-end">
          <NavbarEnd isTablepage={isTablePage} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
