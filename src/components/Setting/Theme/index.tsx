import React from "react";
import "./styles.css";

const Theme:React.FC = () => {
    return <div className="theme_container">
        <div className="theme_item_container">
            <div className="theme_item classic"></div>
            <p>Classic</p>
        </div>
        <div className="theme_item_container">
            <div className="theme_item thinted"></div>
            <p>Thinted</p>
        </div>
        <div className="theme_item_container">
            <div className="theme_item dark"></div>
            <p>Dark</p>
        </div>
    </div>
}

export default Theme;