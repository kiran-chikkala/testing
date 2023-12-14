import React from "react";
import HorizontalTab from "../Tab/HorizontalTab";
import "../Tab/horizontaltab.css";

export default {
  Title: 'Tab"',
  component: HorizontalTab,
};
const Template = (args) => <HorizontalTab {...args} />;
export const Tab = Template.bind({});
Tab.args = {
  tablist: [
    { label: "Friend" },
    { label: "Find Friend" },
    { label: "Find Request" },
    { label: "Find Request" },
  ],
  children: [],
};
