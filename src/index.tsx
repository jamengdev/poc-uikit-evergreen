import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { defaultTheme, mergeTheme, ThemeProvider } from "evergreen-ui";

const theme = mergeTheme(defaultTheme, {
  components: {
    Button: {
      appearances: {
        highEmphasis: {
          backgroundColor: "#1C96A3",
          color: "#ffffff",
          _hover: {
            backgroundImage: " linear-gradient(to right, #23B4C3, #19838C)",
            _disabled: {
              backgroundColor: "#1C96A3",
            },
          },
        },
        midEmphasis: {
          backgroundColor: "#A6E0E5",
          color: "#373737",
          _hover: {
            backgroundColor: "#A6E0E5",
            backgroundImage:
              "linear-gradient(to right, rgba(222, 246, 252, 0.8), rgba(123, 210, 219, 0.8))",
            _disabled: {
              backgroundColor: "#A6E0E5",
            },
          },
        },
        lowEmphasis: {
          backgroundColor: "#FFFFFF",
          border: "2px solid",
          borderColor: "#1C96A3",
          color: "#1C96A3",
          _hover: {
            backgroundColor: "#FFFFFF",
            backgroundImage: "linear-gradient(to right, #DEF6FC, #7BD2DB)",
            _disabled: {
              backgroundColor: "#A6E0E5",
            },
          },
        },
      },
      baseStyle: {
        color: "white",
        paddingX: 12,
        paddingY: 8,
        borderRadius: 5,
        backgroundColor: "indianred",
        border: "0",
        _hover: {
          //   backgroundColor: "firebrick",
        },
        _active: {
          //   backgroundColor: "darkred",
        },
        _focus: {
          //   boxShadow: "0 0 0 2px lightcoral",
        },
        _disabled: {
          opacity: 0.4,
        },
      },
      sizes: {
        small: {
          fontSize: "fontSizes.1",
          minWidth: 56,
        },
        medium: {
          fontSize: "fontSizes.3",
          minWidth: 80,
        },
        large: {
          fontSize: "fontSizes.3",
          minWidth: 96,
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
