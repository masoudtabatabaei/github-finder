import axios from "axios";
import React, { ChangeEvent, useRef, useState } from "react";
import "./styles.css";

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
}

export const Search: React.FC<ISearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    const searchTermInput = searchTerm.toLowerCase();
    if (searchTermInput === "") {
      console.log("Enter something");
      return;
    }

    onSearch(searchTermInput);
  };

  return (
    <div className="search_container">
      <input
        type="text"
        placeholder="Enter something"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
