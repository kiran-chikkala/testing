import React, { useState } from "react";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import "../checkbox/checkbox.css";

const CheckBoxComponent = ({ checkBoxList, matchkey }) => {
  const [checkedItems, setcheckedItems] = useState({});
  // console.log(checkedItems);
  const handleCheckboxChange = (checkbox) => {
    setcheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [checkbox.label]: !prevCheckedItems[checkbox.label],
    }));
  };

  return (
    <div>
      <div className="list_rel">
        {checkBoxList.length &&
          checkBoxList.map((checkbox, index) => (
            <div>
              <FormControlLabel
                key={index}
                checked={checkedItems[checkbox.label] || false}
                onChange={() => handleCheckboxChange(checkbox)}
                disabled={checkbox?.disabled}
                label={matchkey ? checkbox[matchkey] : checkbox?.label}
                control={<Checkbox />}
              />
              <Divider light />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
