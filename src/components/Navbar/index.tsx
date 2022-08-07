import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="main_container header">
        <div>
          <Link to="/">Github Finder</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about" style={{ marginLeft: "30px" }}>About</Link>
        </div>
      </div>
    </nav>
  );
};
