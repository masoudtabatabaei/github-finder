import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faTh } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
  changeView: (activeView: string) => void;
}

export const Search: React.FC<ISearchProps> = ({ onSearch, changeView }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    const searchTermInput = searchTerm.toLowerCase().trim();
    if (searchTermInput === "") {
      console.log("Enter something");
      return;
    }

    onSearch(searchTermInput);
  };

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
          <FontAwesomeIcon icon={faTh} fontSize="22px" color="#444" />
        </span>
        <span onClick={() => changeView("table")}>
          <FontAwesomeIcon icon={faTableList} fontSize="22px" color="#444" />
        </span>
      </div>
    </div>
  );
};
