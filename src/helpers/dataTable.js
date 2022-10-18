import React from "react";
import { DataGrid } from "@mui/x-data-grid";
export const dataTable = ({ child, ...props }) => {
  return (
    // <div style={{ height: 400, width: "100%" }}>
    <DataGrid {...props}>{child}</DataGrid>
    //   rows={rows}
    //   columns={columns}
    //   pageSize={5}
    //   rowsPerPageOptions={[5]}
    //   checkboxSelection
  );
};
