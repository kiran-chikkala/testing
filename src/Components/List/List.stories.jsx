import React from "react";
import ListComponent from "../List/ListComponent";

const Template = (args) => <ListComponent {...args} />;

export default {
  title: "Components/ListComponet",
  component: ListComponent,
};

export const List = Template.bind({});
List.args = {
  userArray: [
    {
      image: "https://robohash.org/hicveldicta.png",
      firstName: "Terry",
      company: {
        title: "Help Desk Operator",
      },
    },
    {
      image: "https://robohash.org/hicveldicta.png",
      firstName: "Terry",
      company: {
        title: "Help Desk Operator",
      },
    },
    {
      image: "https://robohash.org/hicveldicta.png",
      firstName: "Terry",
      company: {
        title: "Help Desk Operator",
      },
    },
  ],

  actionItems: [
    { label: "Profile", value: "profile" },
    { label: "Unfollow Profile", value: "unfollow" },
  ],
  flag: false,
  actionButtonConfig: {
    actionMenuEnable: true,
    actionButtonItem: [],
  },
};
