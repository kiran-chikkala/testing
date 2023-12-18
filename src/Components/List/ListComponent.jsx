import React, { useState } from "react";
import {
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
  IconButton,
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UyniteTick from "./UyniteTick";
import ButtonComponent from "../Button/ButtonComponent";
import ListLoading from "../ListLoading/ListLoading";
const ListComponent = ({
  userArray,
  actionItems,
  flag,
  loadingConfig,
  UyniteTickconfig = {},
  actionButtonConfig = {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const {
    actionMenuEnable = true,
    actionButtonItem = [],
    actionButtonCallbk,
  } = actionButtonConfig;

  if (!flag && userArray.length === 0) {
    return <ListLoading loadingConfig={loadingConfig} />;
  } else if (flag && userArray.length === 0) {
    return <p>Not receieved any data yet</p>;
  }

  const open = Boolean(anchorEl);
  const handleClickMenu = (e) => {
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
    <List>
      {userArray.map((item) => (
        <>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ border: "1px solid black" }} src={item?.image} />
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary={
                item.gender === "male" ? (
                  item?.firstName
                ) : (
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    {item?.firstName} <UyniteTick {...UyniteTickconfig} />
                  </Grid>
                )
              }
              secondary={item?.company?.title}
            />
            {actionMenuEnable ? (
              <>
                <Tooltip>
                  <IconButton onClick={handleClickMenu}>
                    <MoreVertIcon />
                  </IconButton>{" "}
                </Tooltip>{" "}
                <Menu
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  open={open}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.32))",
                      mt: 1.2,

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
                      {action?.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              actionButtonItem.map((action) => (
                <ButtonComponent
                  label={action.label}
                  variant="contained"
                  handleClick={() => actionButtonCallbk(action)}
                />
              ))
            )}
          </ListItem>

          <Divider light />
        </>
      ))}{" "}
    </List>
  );
};

export default ListComponent;
