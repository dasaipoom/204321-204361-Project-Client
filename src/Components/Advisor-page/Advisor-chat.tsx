import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";
import MessageBox from "../Chat-page/Message-box";

function AdvChat({ username, mes }) {
  let text;
  return (
    <div className="full">
    <div className="chatcontainer">
      <div className="sendcontainer">
        <input
          className="Mesinputbox input is-small"
          type="Meassage"
          onChange={this.handleChange}
          ref={node => (text = node)}
        />
        <button
          className="sendbutton button is-small "
          type="submit"
          onClick={() => console.log(text)}
        >
          Send
        </button>
      </div>
      <div className="chatfeedbox">
        {mes.length > 1 &&
          mes.map((val, index) => <MessageBox key={index} mes={val} />)}
      </div>
      <span id="bot"></span>
    </div>
  </div>
  )
}

export default AdvChat;
