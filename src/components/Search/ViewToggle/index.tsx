import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faTh } from "@fortawesome/free-solid-svg-icons";
import { ViewMethods, ViewMethodsItem } from "./styles";

interface IViewToggleProps {
    view: string;
    changeView: (activeView: string) => void;
}

const ViewToggle: React.FC<IViewToggleProps> = ({ changeView , view }) => {
    const setActiveView = (activeView: string) => {
        return view === activeView ? "#008000" : "#aaa";
    }

    return <ViewMethods>
        <ViewMethodsItem onClick={() => changeView("grid")}>
            <FontAwesomeIcon icon={faTh} fontSize="22px" color={setActiveView("grid")} />
        </ViewMethodsItem>
        <ViewMethodsItem onClick={() => changeView("table")}>
            <FontAwesomeIcon icon={faTableList} fontSize="22px" color={setActiveView("table")} />
        </ViewMethodsItem>
    </ViewMethods>
}

export default ViewToggle;