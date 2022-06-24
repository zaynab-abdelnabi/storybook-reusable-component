import React from "react";
import { FaLongArrowAltRight, FaHome } from "react-icons/fa";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isHovered: {
      control: "boolean",
    },
    btncolor: { control: { type: "color" }, presetColors: ["red", "green"] },
    text: { control: "text" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    className: {
      control: "text",
    },
    icon: {
      control: "object",
    },
    iconLocation: {
      options: ["start", "end"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Login = Template.bind({});
Login.args = {
  text: "Login",
  size: "small",
  btncolor: "#FDBA31",
  onClick: () => {},
};

export const Register = Template.bind({});
Register.args = {
  text: "Register",
  size: "small",
  btncolor: "#FDBA31",
  isHovered: true,
  onClick: () => {},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Get Started",
  size: "large",
  isHovered: true,
  icon: <FaLongArrowAltRight />,
  iconLocation: "end",
  onClick: () => {},
};
