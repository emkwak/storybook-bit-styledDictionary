import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
};

export const Basic = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
    <Button onClick={action("button-clicked")} variant="contained">
      Contained
    </Button>
    <Button onClick={action("button-clicked")} variant="text">
      Text
    </Button>
    <Button onClick={action("button-clicked")} variant="outlined">
      Outlined
    </Button>
  </div>
);
