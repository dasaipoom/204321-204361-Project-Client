import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss"

class TableForm extends React.Component {
    render() {
      return (
        
        <table class="table">
            <thead>
                <tr>
                    <th><abbr title="Classid">รหัสวิชา</abbr></th>
                    <th><abbr title="Classname">ชื่อวิชา</abbr></th>
                    <th><abbr title="Credit">หน่วยกิจ</abbr></th>
                    <th><abbr title="Grade">เกรดที่ได้</abbr></th>
                </tr>
            </thead>
        </table>
      )
        

    }
  }
  
  export default TableForm;