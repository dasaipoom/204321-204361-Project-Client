import React from "react";
import { render } from "react-dom";
import "./Chat.scss";
import { connect } from "react-redux";

function MessageBox({ mes, userType }) {
  if (mes.SentBy === userType) {
    return (
      <div className="Messboxcontairne r">
        <p>//ฟังชั่นเวลสาasdfghjkของอีแพร</p>
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
        <p>//ฟังชั่นเวลสาของอีแพร</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userType: state.login.userType
});

export default connect(mapStateToProps)(MessageBox);
