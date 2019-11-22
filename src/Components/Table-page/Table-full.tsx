import React from "react";
import TableEle from "./Table-ele";
import { GradeAvg, sumCre } from "../../Service/calc";
import { connect } from "react-redux";

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
      <td colSpan={2} className="has-text-right">
        หน่วยกิตและเกรดที่ได้ในภาคการศึกษา
      </td>
      <td className="has-text-centered">{cre}</td>
      <td className="has-text-centered">{avg}</td>
    </tr>
  );
}

function sumAll(course, allTable) {
  const stip = allTable.filter(val => {
    if (val.Year < course.Year) {
      return val;
    } else if (val.Year === course.Year && val.Term <= course.Term) return val;
    return null;
  });
  const mapped = stip.map(e => {
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
      <td colSpan={2} className="coursename has-text-right">
        หน่วยกิตและเกรดสะสมทั้งหมด
      </td>
      <td className="credit has-text-centered">{cre}</td>
      <td className="grade has-text-centered">{avg}</td>
    </tr>
  );
}

function TableFull({ tid, courses, table }) {
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
        {courses && sumAll(sortCourses[0], table)}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  table: state.table.table
});

export default connect(mapStateToProps)(TableFull);
