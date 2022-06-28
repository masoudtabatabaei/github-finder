import axios from "axios";
import React, { ChangeEvent, useRef, useState } from "react";
import "./styles.css";

export const Search: React.FC = () => {
  const searchTerm = useRef<string>(
    ""
  ) as unknown as React.MutableRefObject<HTMLInputElement>;

  const handleSearch = async () => {
    const searchTermInput = searchTerm.current.value.toLowerCase();
    console.log("search: ", searchTerm.current.value);
    if (searchTermInput === "") {
      console.log("Enter something");
      return;
    }

    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTermInput} in:name type:user`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
