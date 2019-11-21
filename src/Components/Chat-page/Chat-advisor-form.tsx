import React from "react";
import { connect } from "react-redux";
import { getTooNew } from "../../Service/chat-service";
import chat from "../../Redux/Reducers/chat";
import { validate } from "@babel/types";
import "./Chat.scss";
import MessageBox from "./Message-box";

class ChatStudentForm extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.newChat();
  }

  studentbox(){
    <div className = "stdcontainer">
        <div>
            <p className="schar">{StudentID}</p>
            <p className="retire">{retirepercen}</p>
        </div>
        <div>
            <p className="lastmes">{"message"}</p>
            <p>{dateChat(.Time)}</p>
        </div>
    </div>
    }

  render() {
    // @ts-ignore
    const { chat } = this.props;
    let mes = [...chat];

    if (mes.length > 1)
      mes.sort((a, b) => {
        return a.Time - b.Time;
      });

    return (
      <div className="full">
        <div className = "chatlistcontainer">

        </div>
        <div className="chatcontainer">
          <div className = "sendcontainer">
              <input className = "Mesinputbox input is-small" type="Meassage"/>
              <button className = "sendbutton button is-small " type = "submit">
                Send
              </button>
          </div>
          <div className="chatfeedbox">
            {mes.length > 1 && mes.map(val => <MessageBox mes={val} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat.chat
});

const mapDispatchToProps = dispatch => {
  return {
    newChat: () => dispatch(getTooNew())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatStudentForm);
