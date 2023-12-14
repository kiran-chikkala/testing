import React from "react";
import ListLoading from "../ListLoading/ListLoading";

export default {
  title: "Components/ListLoading",
  component: ListLoading,
};
const Template = (args) => <ListLoading {...args} />;
export const Loader = Template.bind({});
Loader.args = {
  isLoading: true,
  loadingItems: 8,
};
