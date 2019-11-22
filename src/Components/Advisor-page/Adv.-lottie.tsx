import React from "react";
import Lottie from "lottie-react-web";
import animation from "./ChatBubble.json";

export default class AdvLottieControl extends React.Component {
  render() {
    return (
      <div className="full lott">
        <Lottie
          options={{
            animationData: animation
          }}
          width="500px"
        />
      </div>
    );
  }
}
