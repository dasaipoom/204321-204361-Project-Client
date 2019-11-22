import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Adv.scss"

function retiredStr(per) {
  per = 100 - per;
  if (per <= 0) return <p className="PerFailed cri">Critical</p>;
  else if (per <= 33) return <p className="PerFailed hi">High</p>;
  else if (per <= 50) return <p className="PerFailed med">Medium</p>;
  else return <p className="PerFailed lo">Low</p>;
}

function StdBox({ student }) {
  return (
    <Link to={`/adv/${student.StudentID}`}>
      <div
        className={`stdcontainer ${
          student.StudentID === useParams().pid ? "selected" : ""
        }`}
      >
        <div className="profilebox">
          <div className="studenprofile">
            <p className="sId">{student.StudentID}</p>
            {retiredStr(student.PerFailed)}
          </div>
          <p className="Sname">{student.StdName}</p>
        </div>
      </div>
    </Link>
  );
}

export default StdBox;
