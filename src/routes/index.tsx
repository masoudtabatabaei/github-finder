import React from "react";
import { BrowserRouter as Router, Route, Routes as RoutesWrapper } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navbar";
import { Dashboard } from "../layouts/Dashboard";

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Dashboard>
        <RoutesWrapper>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </RoutesWrapper>
      </Dashboard>
    </Router>
  );
}