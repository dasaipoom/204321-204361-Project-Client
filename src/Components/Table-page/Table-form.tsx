import React from "react";
import { connect } from "react-redux";
import "./Table-page.scss";
import { getTable } from "../../Service/table-service";

class TableForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // @ts-ignore
    this.props.getTable(this.props.id);
  }

  render() {
    // @ts-ignore
    const { table } = this.props;
    return (
      <div className="table">
        {table &&
          table.map((element, index) => {
            return <p key={index}>{element.CourseID}</p>;
          })}
      </div>
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
