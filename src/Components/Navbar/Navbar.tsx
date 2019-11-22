import React from "react";
import NavbarEnd from "./Navbar-end/Navbar-end";
import "./Navbar.scss";
import NavForTable from "./Nav-for-table/Nav-for-table";
import PropTypes from "prop-types";

class Navbar extends React.Component {
  static propTypes = {
    isTablePage: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    // @ts-ignore
    this.setState({ active: !this.state.active });
  }
  render() {
    // @ts-ignore
    const { active } = this.state;
    // @ts-ignore
    const { isTablePage } = this.props;
    return (
      <nav
        className="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className={`navbar-brand ${active ? "is-active" : ""}`}>
          <a className="navbar-item logo" href="#top">
            Plan.G
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="nav"
            href="#toggle"
            onClick={this.handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="nav" className={`navbar-menu ${active ? "is-active" : ""}`}>
          <div className="navbar-start">{isTablePage && <NavForTable />}</div>
          <div className="navbar-end">
            <NavbarEnd isTablepage={isTablePage} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
