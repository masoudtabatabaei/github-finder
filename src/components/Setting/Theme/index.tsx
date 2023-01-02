import React, { useContext } from "react";
import { IThemeType } from "../../../theme.styled";
import * as themes from "../../../theme.styled";
import { CustomThemeContext } from "../../../App";
import { ThemeContainer, ThemeItemContainer, ThemeItem } from "./index.styled";

const Theme:React.FC = () => {
    const {theme, setMode} = useContext(CustomThemeContext);

    const changeTheme = (selectedTheme:IThemeType) => {
        setMode(selectedTheme);
    }

    const handleActiveThemeClass = (selectedTheme:IThemeType) => {
        return theme?.name === `${selectedTheme?.name}` ? "active" : "";
    }

    return <ThemeContainer>
        <ThemeItemContainer className={handleActiveThemeClass(themes.Classic)} onClick={() => changeTheme(themes.Classic)}>
            <ThemeItem className="classic"></ThemeItem>
            <p>Classic</p>
        </ThemeItemContainer>
        <ThemeItemContainer className={handleActiveThemeClass(themes.Thinted)} onClick={() => changeTheme(themes.Thinted)}>
            <ThemeItem className="thinted"></ThemeItem>
            <p>Thinted</p>
        </ThemeItemContainer>
        <ThemeItemContainer className={handleActiveThemeClass(themes.Dark)} onClick={() => changeTheme(themes.Dark)}>
            <ThemeItem className="dark"></ThemeItem>
            <p>Dark</p>
        </ThemeItemContainer>
    </ThemeContainer>
}

export default Theme;