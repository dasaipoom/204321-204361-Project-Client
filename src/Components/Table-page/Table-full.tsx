import React from "react";
import TableEle from "./Table-ele";
import { GradeAvg, sumCre } from "../../Service/calc";

function TableHead() {
  return (
    <thead>
      <tr>
        <th className="has-text-centered">รหัสวิชา</th>
        <th className="has-text-centered">ชื่อวิชา</th>
        <th className="has-text-centered">หน่วยกิต</th>
        <th className="has-text-centered">เกรดที่ได้</th>
      </tr>
    </thead>
  );
}

function sumGrade(courses) {
  const mapped = courses.map(e => {
    if (e.Grade === "P") {
      return {
        ...e,
        Grade: e.EditedGrade
      };
    }
    return e;
  });
  const avg = GradeAvg(mapped);
  const cre = sumCre(mapped);
  return (
    <tr>
      <td className="has-text-centered"></td>
      <td className="has-text-centered"></td>
      <td className="has-text-centered">{cre}</td>
      <td className="has-text-centered">{avg}</td>
    </tr>
  );
}

function TableFull({ tid, courses }) {
  if (courses.length === 0) {
    return <></>;
  }
  const sortCourses = courses.sort((a, b) => {
    if (a.CourseID < b.CourseID) {
      return -1;
    }
    if (a.CourseID > b.CourseID) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <table id={tid} className="table is-bordered is-striped is-hoverable">
      {TableHead()}
      <tbody>
        {sortCourses &&
          sortCourses.map((element, index) => {
            return <TableEle key={index} element={element} />;
          })}
        {courses && sumGrade(sortCourses)}
      </tbody>
    </table>
  );
}

export default TableFull;
