import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";
import MessageBox from "../Chat-page/Message-box";

function AdvChat({ username, chat }) {
  let text;
  let mes = [...chat];

  if (mes.length > 1)
    mes.sort((a, b) => {
      return a.Time - b.Time;
    });
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
  );
}

const mapStateToProps = state => ({
  chat: state.chat.chat,
  adv: state.login.adv
});

const mapDispatchToProps = dispatch => {
  return {
    newChat: () => dispatch(getTooNew()),
    send: (to, message) => dispatch(sendMessage(to, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvChat);
