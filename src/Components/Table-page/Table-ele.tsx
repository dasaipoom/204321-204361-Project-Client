import React from "react";
import { render } from "react-dom";

function TableEle({ element }) {
  const { CourseID, CourseName, CourseCredit, Grade } = element;
  if (Grade == "P") {
    return (

      <tr>
        <td className="has-text-centered">{CourseID}</td>
        <td className="has-text-centered">{CourseName}</td>
        <td className="has-text-centered">{CourseCredit}</td>
        <td className="has-text-centered">
          <input
          className="input is-small has-text-centered"
          type="EditedGrade"
          />
        </td>
      </tr>

    );
  }
  else{
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

export default TableEle;
