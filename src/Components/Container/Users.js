import React from "react";
import { Typography } from "../../Components/Common/Typography";
import { BasicTable } from "../../Basic Table/BasicTable";
import { COLOMNS } from "../../Basic Table/Coloumns";
import USER_DATA from "../../api/USER_DATA.json";

export const Users = () => {
  return (
    <div>
      <Typography variant="h2" color="secondary">
        User
      </Typography>
      <BasicTable headings={COLOMNS} rowsData={USER_DATA} />
    </div>
  );
};
