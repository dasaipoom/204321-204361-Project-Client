import React from "react";
import AdvStd from "./Advisor-Std";
import "../Chat-page/Chat.scss";
import { useParams } from "react-router-dom";

function AdvPage() {
  const id = useParams().id;
  console.log(id);
  return (
    <div className="flex-container full">
      <AdvStd />
    </div>
  );
}

export default AdvPage;
