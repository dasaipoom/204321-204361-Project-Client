import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";
import MessageBox from "../Chat-page/Message-box";
import { useParams } from "react-router-dom";
import { changeCurr } from "../../Redux/Actions/advAction";

function AdvChat({ username, chat, send, changeCurr }) {
  let text;
  let mes = [...chat];
  const { pid } = useParams();
  changeCurr(pid);
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
            ref={node => (text = node)}
          />
          <button
            className="sendbutton button is-small "
            type="submit"
            onClick={() => send(pid, text)}
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
    send: (to, message) => dispatch(sendMessage(to, message)),
    changeCurr: curr => dispatch(changeCurr(curr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvChat);
