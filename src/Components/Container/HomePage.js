import { Typography } from "../../Components/Common/Typography";
import React from "react";
import { HOME_PAGE } from "../../Config/Constants";

export const HomePage = () => {
  return (
    <div>
      <Typography color="primary" variant="h2">
        {HOME_PAGE}
      </Typography>
    </div>
  );
};
