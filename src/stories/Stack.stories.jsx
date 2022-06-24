import React from "react";

import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    spacing: {
      control: { type: "number", min: 1, max: 30, step: 1 },
    },
    direction: {
      options: ["row", "column"],
      control: { type: "inline-radio" },
    },
    wrap: {
      control: "boolean",
    },
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  spacing: 2,
  direction: "row",
  wrap: false,
};

// export const Vertical = Template.bind({});
// Vertical.args = {
//   spacing: 2,
//   direction: "column",
//   wrap: false,
// };

// export const NoSpacing = Template.bind({});
// NoSpacing.args = {
//   spacing: 0,
//   direction: "row",
//   wrap: false,
// };

// export const WrapOverFlow = Template.bind({});
// WrapOverFlow.args = {
//   numberOfChildren: 40,
//   spacing: 2,
//   direction: "row",
//   wrap: true,
// };
