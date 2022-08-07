import React, { ReactNode } from "react";
import { Navbar } from "../../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../../components/About";
import { Home } from "../../components/Home";


interface IPanelProps {
  children:ReactNode;
}

export const Dashboard: React.FC<IPanelProps> = ({children}) => {
  return (
    <div className="main_container">
      { children }
    </div>
  );
};
