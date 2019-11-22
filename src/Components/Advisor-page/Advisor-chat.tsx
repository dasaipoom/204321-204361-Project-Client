import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../Service/chat-service";
import { useParams } from "react-router-dom";
import { changeCurr } from "../../Redux/Actions/advAction";
import "./Adv.scss";
import { Link } from "react-router-dom";
import AdvChatBox from "./Advisor-chatbox";

function AdvChat({ username, chat, send, changeCurr, student }) {
  let text;
  const { pid } = useParams();
  const std = student.find(usn => usn.StudentID === username);
  changeCurr(pid);
  return (
    <div className="full">
      <div className="chatcontainer">
        <div className="sendcontainer">
          <input
            className="Mesinputbox input is-small"
            type="Message"
            ref={node => (text = node)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                send(pid, text.value);
                text.value = "";
              }
            }}
          />
          <button
            className="sendbutton button is-small "
            type="submit"
            onClick={() => {
              send(pid, text.value);
              text.value = "";
            }}
          >
            Send
          </button>
        </div>
        <div className="chatfeedbox">
          <AdvChatBox />
        </div>
        <span id="bot"></span>
        <div className="talkwith">
          <p className="stdname">
            {std.StdName} {std.StdSurname}
          </p>
          <Link className="tablebutton" to={`/table/${pid}`}>
            <i className="fas fa-table"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  chat: state.chat.chat,
  adv: state.login.adv,
  student: state.adv.student
});

const mapDispatchToProps = dispatch => {
  return {
    send: (to, message) => dispatch(sendMessage(to, message)),
    changeCurr: curr => dispatch(changeCurr(curr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvChat);
