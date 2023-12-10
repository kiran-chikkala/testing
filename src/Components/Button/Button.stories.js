import React from "react";
import ButtonComponent from "./ButtonComponent";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Basic = Template.bind({});
Basic.args = { variant: "contained", label: "contained", disabled: false };

export const Text = Template.bind({});
Text.args = { variant: "text", label: "text", disabled: false };

export const Outline = Template.bind({});
Outline.args = { variant: "outlined", label: "outlined", disabled: false };
