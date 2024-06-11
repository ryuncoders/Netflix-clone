import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      red: string;
      gray: string;
      black: {
        bright: string;
        darker: string;
      };
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
  }
}
