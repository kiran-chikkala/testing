// CheckBoxComponent.jsx
import React, { useState } from "react";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import "../checkbox/checkbox.css";

const CheckBoxComponent = ({ checkBoxList, matchkey, onCheckChange }) => {
  const [localCheckBoxList, setLocalCheckBoxList] = useState(checkBoxList);

  const handleCheckChange = (checkboxitem) => {
    const updatedCheckBoxList = localCheckBoxList.map((checkbox) =>
      checkbox.label === checkboxitem.label
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );

    setLocalCheckBoxList(updatedCheckBoxList);

    onCheckChange(updatedCheckBoxList);
  };

  return (
    <div>
      <div className="list_rel">
        {localCheckBoxList.map((checkboxitem) => (
          <div key={checkboxitem.id}>
            <FormControlLabel
              checked={checkboxitem.checked || false}
              onChange={() => handleCheckChange(checkboxitem)}
              disabled={checkboxitem?.disabled}
              label={matchkey ? checkboxitem[matchkey] : checkboxitem?.label}
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
