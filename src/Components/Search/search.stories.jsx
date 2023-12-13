import React from "react";
import SearchBar from "../Search/SearchBar";

export default {
  title: "SearchBar",
  component: SearchBar,
};

export const Template = (args) => <SearchBar {...args} />;

export const Input = Template.bind({});
Input.args = {
  width: "400px",
  placeholder: "search",
  searchInputValue: "hello",
  updateChange: () => {
    console.log("value");
  },
};
