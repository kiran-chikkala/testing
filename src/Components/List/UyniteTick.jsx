import { Avatar } from "@mui/material";
import React from "react";
import { TICK_ } from "../../utiles/Api";

const UyniteTick = (prop) => {
  const { width = 24, height = 24 } = prop;
  return (
    <div>
      <Avatar sx={{ width: { width }, height: { height } }} src={TICK_} />
    </div>
  );
};

export default UyniteTick;
