import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
};

export const Contained = () => (
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
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
  </div>
);

export const Text = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
    <Button onClick={action("button-clicked")} variant="text">
      Text
    </Button>
    <Button variant="text" color="primary">
      Primary
    </Button>
    <Button variant="text" color="secondary">
      Secondary
    </Button>
  </div>
);

export const Outlined = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
    <Button onClick={action("button-clicked")} variant="outlined">
      Outlined
    </Button>
    <Button variant="outlined" color="primary">
      Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
    <Button variant="outlined" color="tertiary">
      Hello
    </Button>
  </div>
);
