//@ts-nocheck
import { defaultTheme, mergeTheme } from "evergreen-ui";
import { button } from "./button";

export const theme = mergeTheme(defaultTheme, {
  components: {
    Button: button,
  },
  colors: {
    brandOne: "#1C96A3",
    brandTwo: "#A6E0E5",
  },
});
