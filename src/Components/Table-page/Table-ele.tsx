import React from "react";
import { render } from "react-dom";

function TableEle(element) {
  const { CourseID, CourseName, CourseCredit, Grade } = element.element;
  if (Grade == "P") {
    return (
      
      <tr>
        <td>{CourseID}</td>
        <td>{CourseName}</td>
        <td>{CourseCredit}</td>
        <td>
          <input 
        
          className="input is-small"
          type="EditedGrade"
          />
        </td>
      </tr>
     
    );
  }  
  else{
    return (
      
      <tr>
        <td>{CourseID}</td>
        <td>{CourseName}</td>
        <td>{CourseCredit}</td>
        <td>{Grade}</td>
      </tr>
     
    );
  }
}

export default TableEle;
