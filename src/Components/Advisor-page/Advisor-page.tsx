import React from "react";
import AdvStd from "./Advisor-Std";
import { useParams } from "react-router-dom";
import AdvChat from "./Advisor-chat";
import "./Adv.scss";
import { getTooNew } from "../../Service/chat-service";
import { connect } from "react-redux";
import AdvLottieControl from "./Adv.-lottie";

function AdvPage({ dispatch }) {
  let { pid } = useParams();
  if (pid) {
    dispatch(getTooNew(pid));
  }
  return (
    <div className="Advflex-container full">
      <AdvStd />
      <div className = "Advchatcontainer">{pid && <AdvChat username={pid} />}{!pid && <AdvLottieControl />}</div>
    </div>
  );
}

export default connect()(AdvPage);
