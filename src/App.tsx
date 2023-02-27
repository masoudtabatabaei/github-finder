import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import StoreHelper from "@utils/store-helper";
import useTheme from "@hooks/useTheme";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles";
import * as themes from "./theme.styled";
import { IThemeType } from "@interfaces/theme";

export const CustomThemeContext = createContext({
  theme: {} as IThemeType,
  setMode: (theme: IThemeType) => {}
});

function App() {
  !StoreHelper.getFromLS("all-themes") && StoreHelper.setToLS("all-themes", themes);
  const {theme, setMode} = useTheme();

  return <> {
      !!theme && <CustomThemeContext.Provider value={{theme, setMode}}>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Routes/>
          </ThemeProvider>
      </CustomThemeContext.Provider>
  }
  </>;
}

export default App;
