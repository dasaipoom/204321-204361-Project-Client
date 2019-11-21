import React from "react";
import AdvStd from "./Advisor-Std";
import { useParams } from "react-router-dom";
import AdvChat from "./Advisor-chat";
import "./Adv.scss";

function AdvPage() {
  let { pid } = useParams();
  return (
    <div className="Advflex-container full">
      <AdvStd />
      <div>{pid && <AdvChat username={pid} mem={null}/>}</div>
    </div>
  );
}

export default AdvPage;
