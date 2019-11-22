import React from "react";
import { connect } from "react-redux";
import "./Adv.scss";
import MessageBox from "../Chat-page/Message-box";

class AdvChatBox extends React.Component {
  messagesEnd: any;

  componentDidMount() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
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
        {mes.length > 1 &&
          mes.map((val, index) => <MessageBox key={index} mes={val} />)}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        ></div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat.chat
});

export default connect(mapStateToProps)(AdvChatBox);
