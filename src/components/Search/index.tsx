import axios from "axios";
import React, { ChangeEvent, useRef, useState } from "react";
import "./styles.css";

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
}

export const Search: React.FC<ISearchProps> = ({ onSearch }) => {
  const searchTerm = useRef<string>(
    ""
  ) as unknown as React.MutableRefObject<HTMLInputElement>;

  const handleSearch = async () => {
    const searchTermInput = searchTerm.current.value.toLowerCase();
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
        value={searchTerm.current.value}
        ref={searchTerm}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
