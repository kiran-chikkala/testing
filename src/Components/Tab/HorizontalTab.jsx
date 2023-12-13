import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import "../Tab/horizontaltab.css";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const HorizontalTab = ({ tablist, children }) => {
  const [value, setValue] = useState(0);
  const HandleChange = (e, val) => {
    setValue(val);
  };
  return (
    <>
      <div>
        <Tabs
          className="tabsContainer"
          textColor="primary"
          indicatorColor="transparent"
          value={value}
          sx={{ backgroundColor: "lightgray", marginRight: "2px" }}
          variant="fullWidth"
          onChange={HandleChange}
        >
          {tablist.map((tab, index) => (
            <Tab
              className={value === index ? "tabstyle" : ""}
              label={tab.label}
              index={index}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </div>{" "}
      <TabPanel value={value} index={value}>
        {children[value]}
      </TabPanel>
    </>
  );
};

export default HorizontalTab;
