import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss"
var Tabulator = require('tabulator-tables');

var tableData = [
   {
       "CourseID": "001101",
       "CourseName": "Fundamental English 1",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "A"
   },
   {
       "CourseID": "201111",
       "CourseName": "The World of Science",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "A"
   },
   {
       "CourseID": "202101",
       "CourseName": "Basic Biology 1",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "B"
   },
   {
       "CourseID": "202103",
       "CourseName": "Biology Laboratory 1",
       "CourseCredit": 1,
       "Year": 1,
       "Term": 1,
       "Grade": "A"
   },
   {
       "CourseID": "203111",
       "CourseName": "Chemistry 1",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "D+"
   },
   {
       "CourseID": "203115",
       "CourseName": "Chemistry Laboratory 1",
       "CourseCredit": 1,
       "Year": 1,
       "Term": 1,
       "Grade": "B+"
   },
   {
       "CourseID": "204111",
       "CourseName": "Fundamentals of Programming",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "A"
   },
   {
       "CourseID": "206111",
       "CourseName": "Calculus 1",
       "CourseCredit": 3,
       "Year": 1,
       "Term": 1,
       "Grade": "C+"
   }
];


var table = new Tabulator("CoursePlan", {
   data:tableData, //set initial table data
   columns:[
       {title:"รหัสวิชา", field:"CourseID"},
       {title:"ชื่อวิชา", field:"CourseName"},
       {title:"หน่วยกิต", field:"CourseCredit"},
       {title:"เกรด", field:"Grade"},
       
   ],
});



  
  export default table;

  