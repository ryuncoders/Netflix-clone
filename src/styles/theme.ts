import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    red: "rgb(229, 9, 20)",
    gray: "rgb(91, 91, 91)",
    black: {
      bright: "rgb(20, 20, 20)",
      darker: "rgb(0, 0, 0)",
    },
  },
  fontSize: {
    xs: "0.5em",
    sm: "0.75em",
    base: "1em",
    md: "1.25em",
    lg: "1.5em",
  },
};

export { theme };
