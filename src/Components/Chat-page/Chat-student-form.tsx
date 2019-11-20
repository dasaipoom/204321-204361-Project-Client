import React from "react";
import { connect } from "react-redux";
import { getTooNew } from "../../Service/chat-service";
import { ChatFeed, Message } from "react-chat-ui";
import chat from "../../Redux/Reducers/chat";
import { validate } from "@babel/types";
import "./Chat.scss";
import MessageBox from "./Message-box";

class ChatStudentForm extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.newChat();
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
      <>
        <div className="chatcontainer">
          <div className="chatfeedbox">
            {mes.length > 1 && mes.map(val => <MessageBox mes={val} />)}
          </div>
        </div>
      </>

      // Your JSX...
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
