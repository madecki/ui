import type { Preview } from "@storybook/react";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/globals.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      options: {
        dark: { name: "Dark", value: "#1E1E1E" },
        light: { name: "Light", value: "#FCFAF7" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "dark" },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
    // Wrapper decorator to ensure background fills the entire canvas
    (Story) => (
      <div className="storybook-wrapper">
        <Story />
      </div>
    ),
  ],
};

export default preview;
