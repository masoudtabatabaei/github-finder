import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Dashboard } from "../layouts/Dashboard";

export const PanelRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Dashboard>
    </Router>
  );
}