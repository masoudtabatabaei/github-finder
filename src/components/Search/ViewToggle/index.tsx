import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faTh } from "@fortawesome/free-solid-svg-icons";

interface IViewToggleProps {
    view: string;
    changeView: (activeView: string) => void;
}

const ViewToggle: React.FC<IViewToggleProps> = ({ changeView , view }) => {
    const setActiveView = (activeView: string) => {
        return view === activeView ? "#008000" : "#aaa";
    }

    return <div className="view_methods">
        <span onClick={() => changeView("grid")}>
            <FontAwesomeIcon icon={faTh} fontSize="22px" color={setActiveView("grid")} />
        </span>
        <span onClick={() => changeView("table")}>
            <FontAwesomeIcon icon={faTableList} fontSize="22px" color={setActiveView("table")} />
        </span>
    </div>
}

export default ViewToggle;