import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { Classic } from "./theme.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Classic}>
    <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
