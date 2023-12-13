import React from "react";
import HorizontalTab from "../Tab/HorizontalTab";
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
  ],
  children: [],
};
<div label="Friend"></div>;
<div label="Find Friend"></div>;
<div label=" Find Friend"></div>;
