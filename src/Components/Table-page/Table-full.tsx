import React from "react";
import TableEle from "./Table-ele";

function TableHead (){
    return(
      <thead>
            <tr>
              <th  className="has-text-centered">
                รหัสวิชา
              </th>
              <th  className="has-text-centered">
                ชื่อวิชา
              </th>
              <th  className="has-text-centered">
                หน่วยกิต
              </th>
              <th  className="has-text-centered">
                เกรดที่ได้
              </th>
            </tr>
        </thead>
    )
  }

function TableFull({ tid, courses}) {
    console.log(courses)
    if(courses.length == 0){
        return <></>
    }
    return(
    <table id={tid} className="table is-bordered is-striped is-hoverable">
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
