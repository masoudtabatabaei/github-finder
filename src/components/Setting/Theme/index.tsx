import React from "react";
import useTheme from "../../../hooks/useTheme";
import "./styles.css";

const Theme:React.FC = () => {
    const {theme, setMode} = useTheme();

    const changeTheme = (themeName:string) => {
        console.log("Theme:", themeName);
        setMode(themeName);
    }

    return <div className="theme_container">
        <a className="theme_item_container" onClick={() => changeTheme("Classic")}>
            <div className="theme_item classic"></div>
            <p>Classic</p>
        </a>
        <a className="theme_item_container" onClick={() => changeTheme("Thinted")}>
            <div className="theme_item thinted"></div>
            <p>Thinted</p>
        </a>
        <a className="theme_item_container" onClick={() => changeTheme("Dark")}>
            <div className="theme_item dark"></div>
            <p>Dark</p>
        </a>
    </div>
}

export default Theme;