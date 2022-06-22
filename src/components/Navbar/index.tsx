import React from "react";
import "./styles.css";

export const Navbar:React.FC = () => {
  return <nav>
    <div><a href="#">Github Finder</a></div>
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
  </nav>
}