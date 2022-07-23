import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faTh } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
  view: string;
  changeView: (activeView: string) => void;
}

export const Search: React.FC<ISearchProps> = ({ onSearch, view, changeView }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    const searchTermInput = searchTerm.toLowerCase().trim();
    if (searchTermInput === "") {
      console.log("Enter something");
      return;
    }

    onSearch(searchTermInput);
  };

  const setActiveView = (activeView:string) => {
    return view === activeView ? "#008000" : "#aaa";
  }

  return (
    <div className="search_container">
      <div>
        <input
          type="text"
          placeholder="Enter something"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="view_methods">
        <span onClick={() => changeView("grid")}>
          <FontAwesomeIcon icon={faTh} fontSize="22px" color={setActiveView("grid")} />
        </span>
        <span onClick={() => changeView("table")}>
          <FontAwesomeIcon icon={faTableList} fontSize="22px" color={setActiveView("table")} />
        </span>
      </div>
    </div>
  );
};
