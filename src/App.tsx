import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import StoreHelper from "./helper/store-helper";
import useTheme from "./hooks/useTheme";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles";
import * as themes from "./theme.styled";

function App() {
  !StoreHelper.getFromLS("all-themes") && StoreHelper.setToLS("all-themes", themes);
  const {theme} = useTheme();

  return <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Routes/>
  </ThemeProvider>;
}

export default App;
