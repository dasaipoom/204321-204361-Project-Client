import React from "react";
import NavbarEnd from "./NavbarEnd/Navbar-end";

class TablePage extends React.Component {
  render() {
    // @ts-ignore
    const { isTablePage } = this.props;
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#top"></a>

          <a
            role="button"
            className="navbar-burger"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          {isTablePage && <a className="navbar-item">test</a>}
        </div>
        <div className="navbar-end">
          <NavbarEnd isTablepage={isTablePage}/>
        </div>
      </nav>
    );
  }
}

export default TablePage;
