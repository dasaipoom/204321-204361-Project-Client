import React from "react";
import { updateEditedGrade } from "../../Redux/Actions/tableAction";
import { connect } from "react-redux";

function TableEle({ element, upEditGrade }) {
  const { CourseID, CourseName, CourseCredit, Grade } = element;
  if (Grade === "P") {
    return (
      <tr>
        <td className="has-text-centered">{CourseID}</td>
        <td className="has-text-centered">{CourseName}</td>
        <td className="has-text-centered">{CourseCredit}</td>
        <td className="has-text-centered">
          <input
            className="input is-small has-text-centered"
            type="EditedGrade"
            onChange={event => {
              upEditGrade({
                ...element,
                EditedGrade: event.target.value
              });
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
