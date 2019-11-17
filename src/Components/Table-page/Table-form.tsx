import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss";
import { getTable } from "../../Service/table-service";
import TableEle from "./Table-ele";

class TableForm extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.getTable(this.props.id);
  }

  render() {
    // @ts-ignore
    const { table } = this.props;
    return (
      <table className="table is-bordered is-striped">
        <thead>
          <tr>
            <th>
              <abbr title="Classid">รหัสวิชา</abbr>
            </th>
            <th>
              <abbr title="Classname">ชื่อวิชา</abbr>
            </th>
            <th>
              <abbr title="Credit">หน่วยกิจ</abbr>
            </th>
            <th>
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
