import React from "react";
import AdvisorForm from "./Advisor-Form";
import "./Chat.scss";

class ChatPage extends React.Component {
  render() {
    return (
      <div className="flex-container full">
        <AdvisorForm />
      </div>
    );
  }
}

export default ChatPage;
