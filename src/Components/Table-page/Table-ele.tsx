import React, { useState } from "react";
import { updateEditedGrade } from "../../Redux/Actions/tableAction";
import { connect } from "react-redux";

function TableEle({ element, upEditGrade }) {
  const [text, setText] = useState("");
  const { CourseID, CourseName, CourseCredit, Grade } = element;
  if (Grade === "P" || Grade === "I") {
    return (
      <tr>
        <td className="has-text-centered">{CourseID}</td>
        <td className="has-text-centered">{CourseName}</td>
        <td className="has-text-centered">{CourseCredit}</td>
        <td className="has-text-centered">
          <input
            className="input is-small has-text-centered"
            type="EditedGrade"
            value={text}
            onChange={event => {
              const upper = event.target.value.toUpperCase();
              if (
                [
                  "A",
                  "B+",
                  "B",
                  "C+",
                  "C",
                  "D+",
                  "D",
                  "F",
                  "S",
                  "U",
                  "W",
                  "V",
                  ""
                ].includes(upper)
              ) {
                setText(upper);
                upEditGrade({
                  ...element,
                  EditedGrade: upper
                });
              }
            }}
          />
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="has-text-centered">{CourseID}</td>
        <td className="has-text-centered">{CourseName}</td>
        <td className="has-text-centered">{CourseCredit}</td>
        <td className="has-text-centered">{Grade}</td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upEditGrade: c => dispatch(updateEditedGrade(c))
  };
};

export default connect(null, mapDispatchToProps)(TableEle);
