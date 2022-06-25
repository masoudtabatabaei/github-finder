import React from "react";
import "./styles.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="main_container header">
        <div>
          <a href="#">Github Finder</a>
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#" style={{ marginLeft: "30px" }}>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};
