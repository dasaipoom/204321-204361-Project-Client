import React from "react";
import TableForm from "./Table-form";
import { useParams } from "react-router-dom";

function TablePage() {
  return (
    // @ts-ignore
    <TableForm id={useParams().id} />
  );
}

export default TablePage;
