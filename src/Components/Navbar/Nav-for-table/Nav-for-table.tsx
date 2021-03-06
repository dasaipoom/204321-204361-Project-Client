import React from "react";
import { connect } from "react-redux";

const NavForTable = ({ maxYear }) => {
  if (maxYear) {
    let year = [];
    for (let i = 1; i <= maxYear; i++) {
      year.push(
        <a key={i} href={`#y${i}1`} className="navbar-item">
          ปี {i}
        </a>
      );
    }
    return <>{year}</>;
  }
  return <></>;
};

const mapStateToProps = state => ({
  maxYear: state.table.maxYear
});

export default connect(mapStateToProps)(NavForTable);
