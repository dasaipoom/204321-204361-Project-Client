import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";
import "./Chat.scss";
import MessageBox from "../Chat-page/Message-box";

class advForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // @ts-ignore
    this.props.newChat();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    // @ts-ignore
    const { text } = this.state;
    // @ts-ignore
    this.props.send(this.props.adv, text);
    event.preventDefault();
  }

  render() {
    studentbox(student){
      <div className = "stdcontainer">
          <div>
              <p className="sId">{student.StudentID}</p>
              <p className="PerFailed">{student.PerFailed}</p>
          </div>
          <div>
              <p className="Sname">{student.Stdname}</p>

          </div>
      </div>
      }

    // @ts-ignore
    const { chat } = this.props;
    // @ts-ignore
    const { text } = this.state;
    let mes = [...chat];

    if (mes.length > 1)
      mes.sort((a, b) => {
        return a.Time - b.Time;
      });

    return (
      <div className="full">
        <div className="stdlistcontain">
        {student.length > 1 &&
              student.map((val, index) => <studentbox key={index} student={val} />)}
        </div>
        <div className="chatcontainer">
          <div className="sendcontainer">
            <input
              className="Mesinputbox input is-small"
              type="Meassage"
              value={text}
              onChange={this.handleChange}
            />
            <button
              className="sendbutton button is-small "
              type="submit"
              onClick={this.handleSubmit}
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

var student = [{
  "StudentID": "600510566",
  "StdName": "Patteera",
  "StdSurname": "Thisri",
  "PerFailed": 83.55555555555554
},
{
  "StudentID": "600510569",
  "StdName": "Meehoi",
  "StdSurname": "Eiei",
  "PerFailed": 28.88888888888889
}]

export default connect(mapStateToProps, mapDispatchToProps)(advForm);
