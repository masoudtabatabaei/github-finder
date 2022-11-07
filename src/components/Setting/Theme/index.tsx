import React, { useContext } from "react";
import useTheme from "../../../hooks/useTheme";
import { IThemeType } from "../../../theme.styled";
import * as themes from "../../../theme.styled";
import "./styles.css";
import { CustomThemeContext } from "../../../App";

const Theme:React.FC = () => {
    const {theme, setMode} = useContext(CustomThemeContext);

    const changeTheme = (selectedTheme:IThemeType) => {
        setMode(selectedTheme);
    }

    const handleActiveThemeClass = (selectedTheme:IThemeType) => {
        return theme?.name === `${selectedTheme?.name}` ? "theme_item_container active" : "theme_item_container";
    }

    return <div className="theme_container">
        <a className={handleActiveThemeClass(themes.Classic)} href="javascript:;" onClick={() => changeTheme(themes.Classic)}>
            <div className="theme_item classic"></div>
            <p>Classic</p>
        </a>
        <a className={handleActiveThemeClass(themes.Thinted)} href="javascript:;" onClick={() => changeTheme(themes.Thinted)}>
            <div className="theme_item thinted"></div>
            <p>Thinted</p>
        </a>
        <a className={handleActiveThemeClass(themes.Classic)} href="javascript:;" onClick={() => changeTheme(themes.Classic)}>
            <div className="theme_item dark"></div>
            <p>Dark</p>
        </a>
    </div>
}

export default Theme;