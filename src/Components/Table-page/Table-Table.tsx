import React from "react";
import { render } from "react-dom";
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
  

function Tables (term){
    if (term){
    <table className="table is-bordered is-striped">
          {TableHead()}
          <tbody>
            {term &&
            term.map((element, index) => {
            return <TableEle key={index} element={element} />;
            })}
          </tbody>
        </table>
    }
  }

  function LoopTable(table){
    console.log(table)
    const years = []
    const terms = []
    if (table){
    for (let i = 1; i < 9; i++) {
      const year = table.filter((tables) => {
        return tables.Year === i  })
      console.log(year)
        for (let j = 1; j < 4; j++){
          const term = year.filter((year) => {
            return year.Term === j
          })
          
          
          }
          
          
          }
      }
    }
  

export default Tables;