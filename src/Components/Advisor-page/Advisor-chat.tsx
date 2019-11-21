import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";

function AdvChat({ username }) {
  return <p>Adv Form {username}</p>;
}

export default AdvChat;
