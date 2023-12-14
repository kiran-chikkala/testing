import React from "react";
import CheckBoxComponent from "../checkbox/CheckBoxComponent";
export default {
  Title: "Components/Checkbox",
  component: CheckBoxComponent,
};
const CheckBox = (args) => <CheckBoxComponent {...args} />;
export const Check = CheckBox.bind({});
Check.args = {
  relationConfing: [
    { label: "Friend", disabled: true },
    { label: "Classmate", disabled: false },
    { label: "Relative", disabled: false },
    { label: "Officemate", disabled: false },
    { label: "Party", disabled: false },
    { label: "Org", disabled: false },
  ],
};
