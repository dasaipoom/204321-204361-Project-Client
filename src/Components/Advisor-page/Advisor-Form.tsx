import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";
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
    return <p>Adv Form</p>
  }
}


export default connect()(advForm);
