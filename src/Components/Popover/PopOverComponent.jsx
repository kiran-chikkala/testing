import { Popover, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
export default function PopOveComponent({ popoverContent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickprop = () => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ButtonComponent
        variant="contained"
        label="click"
        handleClick={() => handleClickprop()}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
      </Popover>
    </div>
  );
}
