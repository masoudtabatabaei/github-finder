import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faTh } from "@fortawesome/free-solid-svg-icons";
import { ViewMethods, ViewMethodsItem } from "./index.styled";

interface IViewToggleProps {
    view: string;
    changeView: (activeView: string) => void;
}

const ViewToggle: React.FC<IViewToggleProps> = ({ changeView , view }) => {
    const handleActiveViewClass = (activeView: string) => {
        return view === activeView ? "viewFilter active" : "viewFilter";
    }

    return <ViewMethods>
        <ViewMethodsItem onClick={() => changeView("grid")}>
            <FontAwesomeIcon icon={faTh} fontSize="22px" className={handleActiveViewClass("grid")}/>
        </ViewMethodsItem>
        <ViewMethodsItem onClick={() => changeView("table")}>
            <FontAwesomeIcon icon={faTableList} fontSize="22px" className={handleActiveViewClass("table")}/>
        </ViewMethodsItem>
    </ViewMethods>
}

export default ViewToggle;