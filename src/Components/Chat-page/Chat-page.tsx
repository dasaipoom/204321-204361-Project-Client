import React from "react";
import ChatForm from "./Chat-student-form";
import "./Chat.scss";

class ChatPage extends React.Component {
  render() {
    return (
      <div className="flex-container full">
        <ChatForm />
      </div>
    );
  }
}

export default ChatPage;
