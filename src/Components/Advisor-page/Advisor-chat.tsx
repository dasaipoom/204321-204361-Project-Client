import React from "react";
import { connect } from "react-redux";
import { getTooNew, sendMessage } from "../../Service/chat-service";

class AdvChat extends React.Component {
  render() {
    return <p>Adv Form</p>
  }
}


export default connect()(AdvChat);
