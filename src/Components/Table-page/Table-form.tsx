import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss"

class TableForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       students: [
          { studentid: 500510977, classid: '204112', classname: "aas", year: 1,term:1,credit:3,grade:'a' },
          { studentid: 500510977, classid: '204512', classname: "aadfs", year: 1,term:1,credit:3,grade:'a' },
          { studentid: 500510977, classid: '204512', classname: "aadfs", year: 1,term:1,credit:3,grade:'a' },
          { studentid: 500510977, classid: '204912', classname: "aadfs", year: 1,term:1,credit:3,grade:'a' },
          { studentid: 500510977, classid: '204777', classname: "asdasd", year: 1,term:2,credit:3,grade:'c' },
          { studentid: 500510977, classid: '001226', classname: "gfdgdf", year: 1,term:3,credit:3,grade:'b' },
          { studentid: 500510977, classid: '005884', classname: "aon", year: 2,term:1,credit:3,grade:'F' }
       ]
    }
 }


 renderhead(){
   return (
           <thead>
               <tr>
                   <th><abbr title="Classid">รหัสวิชา</abbr></th>
                   <th><abbr title="Classname">ชื่อวิชา</abbr></th>
                   <th><abbr title="Credit">หน่วยกิจ</abbr></th>
                   <th><abbr title="Grade">เกรดที่ได้</abbr></th>
               </tr>
           </thead> 
   )
 }
 

 renderTableData() {
  
   
       return this.state.students.map((students, index) => {
         const { classid, classname, credit, grade ,term} = students //destructuring
         return (
           <tr id='row0'>
               <td>{classid}</td>
               <td>{classname}</td>
               <td>{credit}</td>
               <td>{grade}</td>
           </tr>
         )
    })

}

 render() {
    return (
       <div>
          
          <table >
             {this.renderhead()}
             <tbody>
                
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

  
  export default TableForm;

  