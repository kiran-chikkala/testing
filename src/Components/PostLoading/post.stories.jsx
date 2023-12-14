import React, { Component } from "react";
import PostLoading from "../PostLoading/PostLoading";
export default {
  title: "Components/PostLoading",
  component: PostLoading,
};
export const Template = (args) => <PostLoading {...args} />;

export const Loaderpost = Template.bind({});
Loaderpost.args = {
  isLoading: true,
  loadingItems: 8,
};
