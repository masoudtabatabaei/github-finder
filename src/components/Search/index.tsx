import React from "react";
import "./styles.css";

export const Search: React.FC = () => {
  return (
    <div className="search_container">
      <input type="text" placeholder="Enter something" />
      <button type="button">Search</button>
    </div>
  );
};
