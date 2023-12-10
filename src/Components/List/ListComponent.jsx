import React, { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import UyniteTick from "./UyniteTick";

const ListComponent = ({
  user,
  UyniteTickconfig = {},
  actionItems,
  ActionMenu,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const { firstName, image, company, gender } = user;
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleActionSelect = (value) => {
    setSelectedAction(value);
    handleClose();
  };
  return (
    <Box
      sx={{
        borderBottom: "1px  ",
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar sx={{ border: "1px solid black" }} src={image} />
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary={
              gender === "male" ? (
                firstName
              ) : (
                <Grid sx={{ display: "flex", alignItems: "center" }}>
                  {firstName} <UyniteTick {...UyniteTickconfig} />
                </Grid>
              )
            }
            secondary={company.title}
          />
          <Tooltip>
            <ActionMenu onClick={handleClick}>
              <MoreVertIcon />
            </ActionMenu>{" "}
          </Tooltip>{" "}
          <Menu
            onClose={handleClose}
            anchorEl={anchorEl}
            open={open}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {actionItems.map((action) => (
              <MenuItem
                key={action.value}
                onClick={() => handleActionSelect(action.value)}
                selected={selectedAction === action.value}
              >
                {action.label}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
      </List>
      <Divider light />
    </Box>
  );
};

export default ListComponent;
