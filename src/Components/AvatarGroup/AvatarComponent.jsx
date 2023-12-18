import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const AvatarComponent = ({ totalAvatar }) => {
  return (
    <AvatarGroup max={4}>
      {totalAvatar.length &&
        totalAvatar.map((item) => <Avatar src={item?.image} alt="image" />)}
    </AvatarGroup>
  );
};

export default AvatarComponent;
