import React from "react";
import "../Chat-page/Chat.scss";
import { connect } from "react-redux";
import { dateChat } from "../../Service/calc";

function MessageBox({student}) {
 
    return (
      <div className = "stdcontainer">
          <div>
              <p className="sId">{student.StudentID}</p>
              <p className="PerFailed">{student.PerFailed}</p>
          </div>
          <div>
              <p className="Sname">{student.Stdname}</p>

          </div>
      </div>
    );
  }


const mapStateToProps = state => ({
  userType: state.login.userType
});

export default connect(mapStateToProps)(MessageBox);
