import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "evergreen-ui";
import { theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
