import React from "react";
import AdvStd from "./Advisor-Std";
import "../Chat-page/Chat.scss";
import { useParams } from "react-router-dom";
import AdvChat from "./Advisor-chat";

function AdvPage() {
  let { pid } = useParams();
  return (
    <div className="flex-container full">
      <AdvStd />
      <div>{pid && <AdvChat username={pid} />}</div>
    </div>
  );
}

export default AdvPage;
