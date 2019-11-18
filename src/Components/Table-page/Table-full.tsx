import React from "react";
import TableEle from "./Table-ele";

function TableHead (){
    return(
      <thead>
            <tr>
              <th  className="has-text-centered">
                <abbr title="Classid">รหัสวิชา</abbr>
              </th>
              <th  className="has-text-centered">
                <abbr title="Classname">ชื่อวิชา</abbr>
              </th>
              <th  className="has-text-centered">
                <abbr title="Credit">หน่วยกิจ</abbr>
              </th>
              <th  className="has-text-centered">
                <abbr title="Grade">เกรดที่ได้</abbr>
              </th>
            </tr>
        </thead>
    )
  }

function TableFull({courses}) {
    console.log(courses)
    if(courses.length == 0){
        return <></>
    }
    return(
    <table className="table is-bordered is-striped">
        {TableHead()}
        <tbody>
            {courses &&
            courses.map((element, index) => {
            return <TableEle key={index} element={element} />;
            })}
        </tbody>
    </table>
        
  )
  
}


export default TableFull;
