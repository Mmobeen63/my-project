import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLOMNS } from "./Coloumns";
import "./table.css";

import { jobsData } from "../api/MOCK_DATA";

export const BasicTable = ({ headings, rowsData }) => {
  const columns = useMemo(() => headings, []);
  const data = useMemo(() => rowsData, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((header) => (
            <tr {...header.getHeaderGroupProps()}>
              {header.headers.map((headerData) => (
                <th {...headerData.getHeaderProps()}>
                  {headerData.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((rowData) => {
            prepareRow(rowData);
            return (
              <tr {...rowData.getRowProps()}>
                {rowData.cells.map((cellData) => (
                  <td {...cellData.getCellProps}>{cellData.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BasicTable.defaultProps = {
  headings: COLOMNS,
  rowsData: jobsData,
};
