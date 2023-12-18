import React from "react";
import AvatarComponent from "../AvatarGroup/AvatarComponent";
export default {
  title: "Components/AvatarGroup",
  component: AvatarComponent,
};
const Template = (args) => <AvatarComponent {...args} />;

export const avatarList = Template.bind({});
avatarList.args = {
  totalAvatar: [
    {
      image: "https://robohash.org/hicveldicta.png",
    },
    {
      image: "https://robohash.org/hicveldicta.png",
    },
    {
      image: "https://robohash.org/hicveldicta.png",
    },
    {
      image: "https://robohash.org/hicveldicta.png",
    },
    {
      image: "https://robohash.org/hicveldicta.png",
    },
  ],
};
