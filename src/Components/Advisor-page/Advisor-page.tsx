import React from "react";
import AdvStd from "./Advisor-Std";
import { useParams } from "react-router-dom";
import AdvChat from "./Advisor-chat";
import "./Adv.scss";
import { getTooNew } from "../../Service/chat-service";
import { connect } from "react-redux";

function AdvPage({ dispatch }) {
  let { pid } = useParams();
  if (pid) {
    dispatch(getTooNew(pid));
  }
  return (
    <div className="Advflex-container full">
      <AdvStd />
      <div>{pid && <AdvChat username={pid} />}</div>
    </div>
  );
}

export default connect()(AdvPage);
