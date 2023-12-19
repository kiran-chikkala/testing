import React from "react";
import CheckBoxComponent from "../checkbox/CheckBoxComponent";
export default {
  Title: "Components/Checkbox",
  component: CheckBoxComponent,
};
const CheckBox = (args) => <CheckBoxComponent {...args} />;
export const Check = CheckBox.bind({});
Check.args = {
  checkBoxList: [
    { label: "Friend", disabled: true, countries: "hyderabed", checked: false },
    { label: "Classmate", disabled: false, countries: "delhi", checked: false },
    { label: "Relative", disabled: false, countries: "mumbai", checked: false },
    {
      label: "Officemate",
      disabled: false,
      countries: "chennai",
      checked: false,
    },
    { label: "Party", disabled: false, countries: "goa", checked: false },
    { label: "Org", disabled: false, countries: "jk", checked: false },
  ],
  onCheckChange: (checkboxitem) => {
    console.log(checkboxitem);
  },
};
