import React from "react";
import { connect } from "react-redux";
import "../Chat-page/Chat.scss";
import "./Adv.scss";
import StdBox from "./Student-box";
import { getStudent } from "../../Service/adv-service";

class AdvStd extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.stdGet()
  }
  render() {
    // @ts-ignore
    const { students } = this.props;
    return (
      <div>
        {students && students.map((val, index) => {
          return <StdBox key={index} student={val} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.adv.student
});

const mapDispatchToProps = dispatch => {
  return {
    stdGet: () => dispatch(getStudent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvStd);
