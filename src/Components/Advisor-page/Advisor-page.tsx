import React from "react";
import AdvisorForm from "./Advisor-Form";
import "./Chat.scss";

class AdvPage extends React.Component {
  render() {
    return (
      <div className="flex-container full">
        <AdvisorForm />
      </div>
    );
  }
}

export default AdvPage;
