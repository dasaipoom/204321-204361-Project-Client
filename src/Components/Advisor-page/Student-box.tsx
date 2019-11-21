import React from "react";
import "../Chat-page/Chat.scss";
import { connect } from "react-redux";
import { dateChat } from "../../Service/calc";
import { Link } from "react-router-dom";

function StdBox({ student }) {
  return (
    <Link to={`/adv/${student.StudentID}`}>
      <div className = "stdcontainer">
        <div className= "profilebox"> 
          <div className = "studenprofile">
              <p className="sId">{student.StudentID}</p>
              <p className="PerFailed">{student.PerFailed}</p>
          </div>
          <p className="Sname">{student.StdName}</p>
        </div>
      </div>
    </Link>
  );
}

export default StdBox;
