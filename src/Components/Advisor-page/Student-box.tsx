import React from "react";
import "./Chat.scss";
import { connect } from "react-redux";
import { dateChat } from "../../Service/calc";

function MessageBox({student}) {
  if (mes.SentBy === userType) {
    return (
      <div className="Messboxcontairne r">
        <p>{dateChat(mes.Time)}</p>
        <div className="sendMesscontainer">
          <p className="phar">{mes.Message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Messboxcontairne l">
        <div className="revMesscontainer">
          <p className="phar">{mes.Message}</p>
        </div>
        <p>{dateChat(mes.Time)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userType: state.login.userType
});

export default connect(mapStateToProps)(MessageBox);
