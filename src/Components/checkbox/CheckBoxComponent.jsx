import React, { useState } from "react";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import "../checkbox/checkbox.css";

const CheckBoxComponent = ({ relationConfing }) => {
  const [checkboxstate, setCheckboxState] = useState(
    relationConfing.map(() => false)
  );
  const HandleCheckBox = (index) => {
    const newState = [...checkboxstate];
    newState[index] = !newState[index];

    setCheckboxState(newState);
  };
  return (
    <div className="list_rel">
      {relationConfing.map((relation, index) => (
        <div>
          <FormControlLabel
            key={index}
            disabled={relation?.disabled}
            label={relation?.label}
            checked={checkboxstate[index]}
            onChange={() => HandleCheckBox(index)}
            control={<Checkbox />}
          />
          <Divider light />
        </div>
      ))}
    </div>
  );
};

export default CheckBoxComponent;
