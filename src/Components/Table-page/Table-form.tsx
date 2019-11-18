import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss";
import { getTable } from "../../Service/table-service";
import TableEle from "./Table-ele";
import { render } from "react-dom";
import TableFull from "./Table-full";

function LoopTable(table){
  console.log(table)
  const tab = []
  if (table){
  for (let i = 1; i < 9; i++) {
    const year = table.filter((tables) => {
      return tables.Year === i  })

    for (let j = 1; j < 4; j++){
      const term = year.filter((year) => {
        return year.Term === j
      })
      // @ts-ignore
      tab.push(<TableFull key={i+""+j} courses={term} tid={"y"+i+j}/>)

      }
  }

  }
  return tab
}




class TableForm extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.getTable(this.props.id);
  }

  render() {
    // @ts-ignore
    const { table } = this.props;


    return (
      <div className="flexbox">
        <div className="flex-container">
          {LoopTable(table)}
        </div>
      </div>
      /*<div className="flexbox">
        <div className="flex-container">
          <table className="table is-bordered is-striped">
            <thead>
              <tr>
                <th className="has-text-centered">
                  <abbr title="Classid">รหัสวิชา</abbr>
                </th>
                <th className="has-text-centered">
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
            <tbody>
              {table &&
                table.map((element, index) => {

                  return <TableEle key={index} element={element} />;
                })}
            </tbody>
          </table>
        </div>
      </div>*/
    );
  }
}

const mapStateToProps = state => ({
  table: state.table.table
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTable: () => dispatch(getTable(ownProps.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
