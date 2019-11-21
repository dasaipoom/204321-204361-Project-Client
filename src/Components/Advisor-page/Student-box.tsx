import React from "react";
import "../Chat-page/Chat.scss";
import { connect } from "react-redux";
import { dateChat } from "../../Service/calc";
import { Link } from "react-router-dom";

function StdBox({ student }) {
  return (
    <Link to={`/adv/${student.StudentID}`}>
      <div className="stdcontainer">
        <div>
          <p className="sId">{student.StudentID}</p>
          <p className="PerFailed">{student.PerFailed}</p>
        </div>
        <div>
          <p className="Sname">{student.Stdname}</p>
        </div>
      </div>
    </Link>
  );
}

export default StdBox;
