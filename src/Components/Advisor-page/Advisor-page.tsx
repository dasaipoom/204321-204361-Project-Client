import React from "react";
import Advisorstdlist from "./Advisor-Std";
import "../Chat-page/Chat.scss";
import { useParams } from "react-router-dom";

function AdvPage() {
    const id = useParams().id

    return (

      <div className="flex-container full">
        <Advisorstdlist />
        
      </div>
    );
  
}

export default AdvPage;
